<script setup lang="ts">
const { variant } = defineProps<{
    variant: "gray" | "black";
}>();
const data = defineModel<string>();
</script>

<template>
    <input
        v-model="data"
        :class="[$style[variant], $style.input]"
    />
</template>

<style module>
.input {
    width: 100%;
    padding: 12px 0;
    background: none;
    border: none;
    color: var(--color-black);
    font-size: 16px;
    font-weight: 400;
}
.input::placeholder {
    color: var(--color-dark-gray);
}
.gray {
    border-bottom: 1px solid var(--color-gray);
}
.black {
    border-bottom: 1px solid var(--color-black);
}
</style>
