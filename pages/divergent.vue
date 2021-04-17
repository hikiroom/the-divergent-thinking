<template>
  <div class="container">
      <Toolbar>
          <SmLogo />
          <TextInput v-model="query" title="拡散したいワードを入力してください" placeholder="拡散したいワードを入力してください" />
          <PrimaryBtn @click="toDivergent">拡散する</PrimaryBtn>
      </Toolbar>
      <div v-if="isLoaded" class="container__contents">
        <Counter label="拡散結果数：" :number="words.length" />
        <DivergentList :item-arr="words" @click="copyWordWrapper" />
      </div>
      <div v-else class="container__contents">
          <Loading>拡散中...</Loading>
      </div>
      <transition name="fade">
        <FloatMessage v-if="isCopy">テキストをコピーしました</FloatMessage>
      </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import fetchJsonp from 'fetch-jsonp';

interface Data {
    query: string;
    words: string[];
    isLoaded: boolean;
    isCopy: boolean;
    copyWordTimer: number|null;
}

export default Vue.extend({
    beforeRouteUpdate(to, _, next) {
        const query = to?.query?.q;

        if (typeof query === 'string' && query !== '') {
            next();

            this.isLoaded = false;
            this.query = decodeURIComponent(query);
            this.itelateGetSuggestWord([query], 2).then((res) => {
                this.words = this.arrayShuffle(Array.from(new Set(res)));
                this.isLoaded = true;
            });
        } else {
            next(false);
        }
    },
    data(): Data {
        return ({
            query: '',
            words: [],
            isLoaded: false,
            isCopy: false,
            copyWordTimer: null,
        });
    },
    mounted() {
        const query = location.search.replace(/\?q=?/, '');

        if (query !== '') {
            this.query = decodeURIComponent(query);
            this.itelateGetSuggestWord([query], 2).then((res) => {
                this.words = this.arrayShuffle(Array.from(new Set(res)));
                this.isLoaded = true;
            });
        } else {
            this.$router.replace('/');
        }
    },
    methods: {
        /**
         * 拡散結果ページへ遷移
         */
        toDivergent():void {
            this.$router.push({
                path: '/divergent',
                query: {
                    q: this.query,
                },
            });
        },
        /**
         * 引数で渡されたテキストをクリップボードにコピーする
         */
        copyWord(word: string):void {
            document.addEventListener('copy', (e: ClipboardEvent) => {
                e.preventDefault();
                e.clipboardData?.setData("text/plain" , word);
            }, { once: true });
            document.execCommand('copy');
        },
        /**
         * 引数で渡されたテキストをクリップボードにコピーする。
         * また、コピーしたことを知らせるフラグを立てて、それをnミリ秒後、自動的に下げるタイマーを起動
         */
        copyWordWrapper(word: string):void {
            if (this.copyWordTimer) {
                clearTimeout(this.copyWordTimer);
                this.copyWordTimer = null;
            }

            this.copyWord(word);

            this.isCopy = true;
            this.copyWordTimer = window.setTimeout(() => {
                this.isCopy = false;
            }, 1200);
        },
        /**
         * 引数で渡された配列の内容をシャッフルした新しい配列を返す。
         */
        arrayShuffle(array: string[]) {
            const newArr = [...array];

            for (let i = newArr.length; i--;) {
                const randomIdx = Math.trunc(Math.random() * i);
                [newArr[i], newArr[randomIdx]] = [newArr[randomIdx], newArr[i]];
            }

            return newArr;
        },
        /**
         * 引数で渡されたワードを元に、それに関連するワードを配列で返す
         */
        async getSuggestWord(query: string): Promise<string[]> {
            return await fetchJsonp(`https://www.google.com/complete/search?hl=ja&client=chrome&q=${query}`).then((res) => res.json()).then((res) => {
                const query = res[0];
                const words = res[1];
                const replacedWords = words.map((word: string) => word.replace(`${query} `, ''));

                return replacedWords;
            }).catch((err) => {
                return [`__error__: ${err}`];
            });
        },
        /**
         * getSuggestWordを任意の数（maxItelate）だけ繰り返す
         */
        async itelateGetSuggestWord(queryArr: string[], maxItelate: number = 1, itelateCounter: number = 0, accumulator: string[] = []): Promise<string[]> {
            if (itelateCounter >= maxItelate) {
                return accumulator;
            } else {
                const newQueryArr = [];

                for (const query of queryArr) {
                    newQueryArr.push(...await this.getSuggestWord(query));
                }

                accumulator.push(...newQueryArr);

                return await this.itelateGetSuggestWord(newQueryArr, maxItelate, itelateCounter + 1, accumulator);
            }
        },
    },
});
</script>

<style lang="scss" scoped>
.container {
    &__contents {
        padding: $p-md;

        > * {
            &:not(:first-child) {
                margin-top: $m-sm;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
}
</style>
