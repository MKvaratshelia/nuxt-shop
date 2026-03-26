<script setup lang="ts">
// const config = useAppConfig();
const runtime = useRuntimeConfig();
</script>

<template>
    <div>{{ runtime.token }}</div>
    <div>{{ runtime.public.apiurl }}</div>
</template>
<style scoped></style>
