<template>
    <button class="primary-btn" type="button" :disabled="disabled" @click="$emit('click')">
        <slot />
    </button>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
    props: {
        disabled: {
            type: Boolean,
            default: false,
        } as PropOptions<boolean>,
    },
});
</script>

<style lang="scss" scoped>
.primary-btn {
    display: block;
    text-align: center;
    background-color: $c-primary;
    color: $c-white;
    padding: $p-xs $p-xl;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 1.4rem;
    @include media-min() {
        padding: $p-xs $p-2xl;
    }
}
</style>
