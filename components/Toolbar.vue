<template>
    <header class="toolbar">
        <slot />
    </header>
</template>

<style lang="scss" scoped>
.toolbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid $c-gray;
    padding: 32px 24px;
    @include media-min() {
        padding: 32px 24px;
        flex-direction: row;
    }

    > *:not(:first-child) {
        margin-top: 24px;
        @include media-min() {
            margin-top: 0;
            margin-left: 32px;
        }
    }
}
</style>
