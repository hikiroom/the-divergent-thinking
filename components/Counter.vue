<template>
    <p class="counter">
        <span>{{ label }}</span><span>{{ number }}</span>
    </p>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
    props: {
        label: {
            type: String,
            default: '',
        } as PropOptions<string>,
        number: {
            type: Number,
            default: 0,
        } as PropOptions<number>,
    },
});
</script>

<style lang="scss" scoped>
.counter {
    color: $c-gray-dark;
}
</style>
