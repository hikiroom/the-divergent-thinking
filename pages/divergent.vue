<template>
  <div class="container">
      <Toolbar>
          <SmLogo />
          <TextInput v-model="query" title="拡散したいワードを入力してください" placeholder="拡散したいワードを入力してください" />
          <PrimaryBtn @click="divergent">拡散する</PrimaryBtn>
      </Toolbar>
      <div v-if="isLoaded" class="container__contents">
        <Counter label="拡散結果数：" :number="words.length" />
        <DivergentList :item-arr="words" @click="copyWord" />
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
    selectedWord: string;
    isCopy: boolean;
    copyWordTimer: number|null;
}

export default Vue.extend({
    beforeRouteUpdate(to, __, next) {
        const query = to?.query?.q;

        if (typeof query === 'string' && query !== '') {
            next();

            this.isLoaded = false;
            this.query = decodeURIComponent(query);
            this.getWords([query], 2).then((res) => {
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
            selectedWord: '',
            isCopy: false,
            copyWordTimer: null,
        });
    },
    mounted() {
        const query = location.search.replace(/\?q=?/, '');

        if (query !== '') {
            this.query = decodeURIComponent(query);
            this.getWords([query], 2).then((res) => {
                this.words = this.arrayShuffle(Array.from(new Set(res)));
                this.isLoaded = true;
            });
        } else {
            this.$router.replace('/');
        }
    },
    methods: {
        copyWord(word: string) {
            if (this.copyWordTimer) {
                clearTimeout(this.copyWordTimer);
                this.copyWordTimer = null;
            }

            document.addEventListener('copy' , (e: ClipboardEvent) => {
                e.preventDefault();
                e.clipboardData?.setData("text/plain" , word);
            }, { once: true });
            document.execCommand('copy');

            this.isCopy = true;
            this.copyWordTimer = window.setTimeout(() => {
                this.isCopy = false;
            }, 1000);
        },
        divergent():void {
            this.$router.push({
                path: '/divergent',
                query: {
                    q: this.query,
                },
            });
        },
        arrayShuffle(array: string[]) {
            const newArr = [...array];

            for (let i = newArr.length; i--;) {
                const randomIdx = Math.trunc(Math.random() * i);
                [newArr[i], newArr[randomIdx]] = [newArr[randomIdx], newArr[i]];
            }

            return newArr;
        },
        async getWords(queryArr: string[], maxItelate: number = 1, itelateCounter: number = 0, accumulator: string[] = []): Promise<string[]> {
            const request = async (query: string) => {
                return await fetchJsonp(`https://www.google.com/complete/search?hl=ja&client=chrome&q=${query}`).then((res) => res.json()).then((res) => {
                    const words = removeQuery(res[1], res[0]);

                    return words;
                }).catch((err) => {
                    return [`__error__: ${err}`];
                });
            };
            const removeQuery = (words: string[], query: string): string[] => {
                return words.map((word) => {
                    return word.replace(`${query} `, '');
                });
            };

            if (itelateCounter >= maxItelate) {
                return accumulator;
            } else {
                const newQueryArr = [];
                for (const query of queryArr) {
                    newQueryArr.push(...await request(query));
                }
                accumulator.push(...newQueryArr);

                return await this.getWords(newQueryArr, maxItelate, itelateCounter + 1, accumulator);
            }
        },
    },
});
</script>

<style lang="scss" scoped>
.container {
    &__contents {
        padding: 16px;

        > * {
            &:not(:first-child) {
                margin-top: 16px;
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
