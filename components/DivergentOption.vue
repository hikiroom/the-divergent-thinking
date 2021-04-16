<template>
    <div class="divergent-option">
        <div class="divergent-option__content">
            <h2 class="divergent-option__title">{{ word }}</h2>
            <ul class="divergent-option__list">
                <li class="divergent-option__list-item">
                    <button class="divergent-option__list-btn" type="button">このワードで拡散する</button>
                </li>
                <li class="divergent-option__list-item">
                    <a class="divergent-option__list-btn" :href="`http://www.google.co.jp/search?q=${word}`" target="_blank">Googleで検索する（別タブが開きます）</a>
                </li>
                <li class="divergent-option__list-item">
                    <button class="divergent-option__list-btn" type="button">テキストをコピーする</button>
                </li>
            </ul>
            <SecondaryBtn class="divergent-option__close">閉じる</SecondaryBtn>
        </div>
    </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
    props: {
        word : {
            type: String,
            required: true,
        } as PropOptions<string>,
    },
});
</script>

<style lang="scss" scoped>
.divergent-option {
    height: 100vh;
    width: 100%;
    background: $c-black-alpha;
    position: fixed;
    left: 0;
    top: 0;

    &__content {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: $c-gray-dark;
        border-top-left-radius: 24px;
        border-top-right-radius: 24px;
        padding: 24px;
    }
    &__title {
        font-size: 1.8rem;
        font-weight: lighter;
        color: $c-white;
        @include media-min() {
            font-size: 2.6rem;
        }
    }
    &__list {
        margin-top: 32px;
    }
    &__list-item {
        &:not(:first-child) {
            margin-top: 24px;
        }
    }
    &__list-btn {
        font-size: 1.8rem;
        font-weight: bold;
        color: $c-white;
        text-decoration: none;
        @include media-min() {
            font-size: 2.6rem;
        }
    }
    &__close {
        margin: 24px auto 0;
    }
}
</style>
