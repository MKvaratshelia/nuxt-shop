<script lang="ts" setup>
import type { Product } from "~/interfaces/product.interface";

const product = defineProps<Product>();
const config = useRuntimeConfig();
const image = computed(() => `url(${config.public.imageurl}${product.images[0]})`);
const isHovered = ref(false);
</script>

<template>
    <NuxtLink
        class="card"
        :to="`/catalog/${product.id}`"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <div class="card__image">
            <span
                v-if="product.discount > 0"
                class="card__discount"
                >-{{ product.discount }}%</span
            >
            <span v-else></span>
            <AddFavorite
                :id="product.id"
                :is-shown="isHovered"
            />
        </div>
        <div class="card__footer">
            <div class="card__name">
                {{ product.name }}
            </div>
            <div class="card__price">$ {{ product.price }}</div>
        </div>
    </NuxtLink>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    text-decoration: none;
}
.card__image {
    aspect-ratio: 1/1;
    width: 100%;
    min-width: 250px;
    border-radius: 8px;
    padding: 16px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: v-bind(image);
    display: flex;
    justify-content: space-between;
    align-items: start;
}
.card__price {
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    text-transform: capitalize;
    color: var(--color-accent);
}
.card__footer {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.card__name {
    font-size: 20px;
    line-height: 26px;
    color: var(--color-black);
}
.card__discount {
    background: var(--color-accent);
    border-radius: 4px;
    padding: 2px 8px;
    font-size: 12px;
    color: var(--color-white-light);
}
</style>
