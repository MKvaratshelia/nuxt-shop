<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{
    error: NuxtError;
}>();

function goHome() {
    navigateTo("/");
}
</script>

<template>
    <div class="error__wrapper">
        <h1>{{ error.statusCode }} ошибка</h1>
        <div
            v-if="error.statusCode == 404"
            class="error__message"
        >
            Страница не найдена, попробуйте перейти на главную страницу
        </div>
        <div
            v-else
            class="error__message"
        >
            {{ error.statusMessage }}
        </div>
        <ActionButton
            color="ghost"
            @click="goHome"
            >На главную</ActionButton
        >
    </div>
</template>

<style scoped>
.error__message {
    color: var(--color-dark-gray);
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 40px;
}
.error__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
}
</style>
