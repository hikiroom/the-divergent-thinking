<template>
    <input
        class="text-input"
        type="text"
        :title="title"
        :placeholder="placeholder"
        :value="value"
        :aria-controls="ariaControls"
        :aria-invalid="ariaInvalid"
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
        ariaControls: {
            type: [String, null],
            default: null,
        } as PropOptions<string|null>,
        ariaInvalid: {
            type: Boolean,
            default: false,
        } as PropOptions<boolean>,
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
    padding: 8px 16px;

    &::placeholder {
        color: $c-gray;
    }
}
</style>
