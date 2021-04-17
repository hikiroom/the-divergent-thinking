<template>
  <div class="container">
      <div class="container__contents">
          <div class="container__contents-inr">
            <Logo />
            <TextInput
                v-model="query"
                title="拡散したいワードを入力してください"
                placeholder="拡散したいワードを入力してください"
            />
            <PrimaryBtn @click="toDivergent">拡散する</PrimaryBtn>
          </div>
      </div>
      <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return ({
            query: '',
        });
    },
    methods: {
        /**
         * 拡散結果ページへ遷移
         */
        toDivergent():void {
            if (this.query !== '') {
                this.$router.push({
                    path: '/divergent',
                    query: {
                        q: this.query,
                    },
                });
            }
        },
    },
});
</script>

<style lang="scss" scoped>
.container {
    &__contents {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 78vh;
        padding: $p-md;
    }
    &__contents-inr {
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        > * {
            &:not(:first-child) {
                margin-top: $m-lg;
                @include media-min() {
                    margin-top: $m-xl;
                }
            }
        }
    }
}
</style>
