<template>
    <p class="float-message">
        <slot />
    </p>
</template>

<style lang="scss" scoped>
.float-message {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: $c-black;
    border-radius: 60px;
    color: $c-white;
    padding: 8px 16px;
    font-size: 1.4rem;
    white-space: nowrap;
    @include media-min() {
        padding: 16px 24px;
    }
}
</style>
