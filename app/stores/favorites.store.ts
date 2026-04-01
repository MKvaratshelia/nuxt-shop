import { defineStore } from "pinia";

export const useFavoritesStore = defineStore(
    "favorites",
    () => {
        const authStore = useAuthStore();
        const favoriteIds = ref<number[]>([]);

        function isFavorite(id: number) {
            return favoriteIds.value.find((f) => f == id);
        }

        function toggleFavorite(id: number) {
            if (!favoriteIds.value.includes(id)) {
                favoriteIds.value.push(id);
                return;
            }
            favoriteIds.value = favoriteIds.value.filter((item) => item != id);
        }

        async function restore(email: string) {
            const data = await $fetch<number[]>("/api/favorites", {
                query: {
                    email: email,
                },
            });
            favoriteIds.value = data;
        }

        return { favoriteIds, toggleFavorite, isFavorite, restore };
    },
    {
        persist: true,
    },
);
