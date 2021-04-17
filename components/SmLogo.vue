<template>
    <h1 class="sm-logo">
        <NuxtLink to="/">
            <span class="sm-logo__sub">THE</span>
            <span class="sm-logo__main">拡散思考</span>
        </NuxtLink>
    </h1>
</template>

<style lang="scss" scoped>
.sm-logo {
    color: $c-black;
    line-height: 1.2;
    white-space: nowrap;

    a {
        text-decoration: none;
    }
    &__sub {
        display: block;
        font-size: 1.2rem;
    }
    &__main {
        display: block;
        font-size: 2.4rem;
    }
}
</style>
