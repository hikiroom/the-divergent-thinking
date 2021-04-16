<template>
    <button class="secondary-btn" type="button" @click="$emit('click')">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.secondary-btn {
    display: block;
    text-align: center;
    background-color: $c-gray-dark-secondary;
    color: $c-white;
    padding: 6px 32px;
    border-radius: 4px;
    white-space: nowrap;
    @include media-min() {
        padding: 6px 40px;
    }
}
</style>
