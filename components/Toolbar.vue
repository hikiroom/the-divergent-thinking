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
    padding: $p-lg $p-md;
    @include media-min() {
        flex-direction: row;
    }

    > *:not(:first-child) {
        margin-top: $m-md;
        @include media-min() {
            margin-top: 0;
            margin-left: $m-lg;
        }
    }
}
</style>
