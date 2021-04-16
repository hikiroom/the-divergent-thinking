<template>
    <h1 class="logo">
        <span class="logo__sub">THE</span>
        <span class="logo__main">拡散思考</span>
    </h1>
</template>

<style lang="scss" scoped>
.logo {
    color: $c-black;
    line-height: 1.2;
    white-space: nowrap;

    &__sub {
        display: block;
        font-size: 2.3rem;
        @include media-min() {
            font-size: 3.4rem;
        }
    }
    &__main {
        display: block;
        font-size: 4.6rem;
        @include media-min() {
            font-size: 6.8rem;
        }
    }
}
</style>
