<script setup lang="ts">
useSeoMeta({
    title: "Главная магазина",
    description: "Магазин Shoppe с ювелирными изделиями.",
    ogDescription: "Магазин Shoppe с ювелирными изделиями.",
});
// отключит ssr на странице
// definePageMeta({ ssr: false })

// Используйте useFetch для простых и одиночных запросов на верхнем уровне.
// Применяйте useAsyncData для сложных случаев, когда нужны несколько источников данных или специальные провайдеры.
// $fetch применяется внутри функций и менее подходит для SSR из-за двойного выполнения.
</script>

<template>
    <div>main page</div>
</template>
<style scoped></style>
