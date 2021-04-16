<template>
    <p :id="id" aria-live="polite" class="error-text">{{ computedText }}</p>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
    props: {
        id: {
            type: [String, null],
            default: null,
        } as PropOptions<string|null>,
        text: {
            type: String,
            default: '',
        } as PropOptions<string>,
        isError: {
            type: Boolean,
            default: false,
        } as PropOptions<boolean>,
    },
    computed: {
        computedText() {
            return this.isError ? this.text : '';
        },
    },
});
</script>

<style lang="scss" scoped>
.error-text {
    color: $c-red;
    font-size: 1.4rem;

    &:empty {
        margin: 0;
        padding: 0;
    }
}
</style>
