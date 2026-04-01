<script lang="ts" setup>
// проверяем авторизацию при загрузке через middleware auth, если не авторизован - редирект на страницу логина
definePageMeta({
    middleware: "auth",
});
const authStore = useAuthStore();
</script>

<template>
    <div>
        <NuxtLink
            href="/"
            @click="authStore.clearToken"
            >Выход</NuxtLink
        >
    </div>
</template>
