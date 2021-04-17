<template>
    <ul class="divergent-list">
        <li v-for="(item) in itemArr" :key="item" class="divergent-list__item">
            <button class="divergent-list__btn" type="button" @click="$emit('click', item)">{{ item }}</button>
        </li>
    </ul>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
    props: {
        itemArr : {
            type: Array,
            required: true,
        } as PropOptions<string[]>,
    },
});
</script>

<style lang="scss" scoped>
.divergent-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: flex-start;
    @include media-min() {
        grid-template-columns: repeat(6, 1fr);
    }

    &__item {
        height: 100%;
    }
    &__btn {
        width: 100%;
        height: 100%;
        text-align: left;
        padding: $p-sm;
        @include media-min() {
            padding: $p-md;
        }
    }
}
</style>
