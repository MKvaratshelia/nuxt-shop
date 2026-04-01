<script setup lang="ts">
const { id, isShown } = defineProps<{
    id: number;
    isShown: boolean;
}>();
const favoriteStore = useFavoritesStore();
</script>

<template>
    <button
        v-show="isShown || favoriteStore.isFavorite(id)"
        class="fav-button"
        @click.stop.prevent="() => favoriteStore.toggleFavorite(id)"
    >
        <Icon
            name="icons:favorite-add"
            size="18px"
        />
    </button>
</template>

<style scoped>
.fav-button {
    background: none;
    border: none;
    cursor: pointer;
}
</style>
