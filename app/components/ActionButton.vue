<script setup lang="ts">
const { color = "primary" } = defineProps<{
    color?: "primary" | "ghost";
}>();
</script>

<template>
    <div>
        <button
            class="button"
            :class="color"
        >
            <slot />
        </button>
    </div>
</template>
<style scoped>
.button {
    border-radius: 4px;
    border: 1px solid var(--color-black);
    cursor: pointer;
    padding: 16px;
    font-size: 16px;
    font-weight: 700;
}
.primary {
    background: var(--color-black);
    font-family: var(--font);
    color: var(--color-white-light);
}

.primary:hover {
    background-color: var(--color-black-hover);
}

.ghost {
    background: var(--color-white-light);
    font-family: var(--font);
    color: var(--color-black);
}

.ghost:hover {
    background-color: var(--color-black-hover);
    color: var(--color-white-light);
}
</style>
