<template>
    <p :id="id" aria-live="polite" class="counter">
        <span>{{ label }}</span><span>{{ computedText }}</span>
    </p>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
    props: {
        id: {
            type: [String, null],
            default: null,
        } as PropOptions<string|null>,
        label: {
            type: String,
            default: '',
        } as PropOptions<string>,
        number: {
            type: Number,
            default: 0,
        } as PropOptions<number>,
        isError: {
            type: Boolean,
            default: false,
        } as PropOptions<boolean>,
    },
    computed: {
        computedText() {
            return this.number;
        },
    },
});
</script>

<style lang="scss" scoped>
.counter {
    color: $c-gray-dark;
    font-size: 1.2rem;
}
</style>
