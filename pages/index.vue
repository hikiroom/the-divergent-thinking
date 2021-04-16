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
            <PrimaryBtn @click="divergent">拡散する</PrimaryBtn>
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
            isError: false,
        });
    },
    methods: {
        divergent():void {
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
        height: 80vh;
        padding: 40px;
    }
    &__contents-inr {
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        > * {
            &:not(:first-child) {
                margin-top: 40px;
            }
        }
    }
}
</style>
