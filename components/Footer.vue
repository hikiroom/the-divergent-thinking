<template>
    <footer class="footer">
        <div class="footer__inr">
            <p class="footer__label">THE 拡散思考とは？</p>
            <div class="footer__text-group">
                <p>「THE 拡散思考」は、拡散的思考（発散的思考）を用いて、あなたのモノづくりを手助けするためのアプリケーションです。<br />気になるワードを入力すると、それに関連するワードが拡散され、新たなる発想をあなたに届けます。</p>
                <p>是非、アイデア出しの初期段階などでご活用ください。</p>
            </div>
            <p class="footer__label">リンク集</p>
            <ul class="footer__list">
                <li class="footer__list-item">
                    <a href="https://github.com/hikiroom/the-divergent-thinking">
                        GitHub
                    </a>
                </li>
                <li class="footer__list-item">
                    <a href="https://twitter.com/hikiroom">
                        お問い合わせ（Twitter）
                    </a>
                </li>
            </ul>
            <p class="footer__label">バージョン</p>
            <div class="footer__text-group">
                <p>{{ $version }}</p>
            </div>
            <p class="footer__copy"><small>©️ 2021 ひきこもり</small></p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background: $c-gray-light;
    margin-top: $m-xl;
    color: $c-gray-dark;

    &__inr {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0 auto;
        padding: $p-md;
    }
    &__label {
        font-weight: bold;

        &:not(:first-of-type) {
            margin-top: $m-xl;
        }
    }
    &__list,
    &__text-group {
        margin-top: $m-sm;
    }
    &__text-group {
        > *:not(:first-child) {
            margin-top: $m-sm;
        }
    }
    &__list-item {
        & + & {
            margin-top: $m-xs;
        }
        > a {
            color: $c-gray-dark;
        }
    }
    &__copy {
        margin-top: $m-xl;
        text-align: center;
    }
}
</style>
