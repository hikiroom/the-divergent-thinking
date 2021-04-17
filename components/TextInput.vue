<template>
    <input
        class="text-input"
        type="text"
        :title="title"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
    >
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
    props: {
        title: {
            type: String,
            required: true,
        } as PropOptions<string>,
        placeholder: {
            type: String,
            required: true,
        } as PropOptions<string>,
        value: {
            type: String,
            default: '',
        } as PropOptions<string>,
    },
});
</script>

<style lang="scss" scoped>
.text-input {
    display: block;
    max-width: 440px;
    width: 100%;
    appearance: none;
    border: 1px solid $c-gray;
    border-radius: 4px;
    background: $c-white;
    color: $c-black;
    padding: $p-xs $p-sm;
    font-size: 1.4rem;
    @include media-min() {
        font-size: 1.6rem;
    }

    &::placeholder {
        color: $c-gray-dark;
    }
}
</style>
