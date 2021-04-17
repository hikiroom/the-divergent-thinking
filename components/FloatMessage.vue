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
    white-space: nowrap;
    padding: $p-sm $p-lg;
}
</style>
