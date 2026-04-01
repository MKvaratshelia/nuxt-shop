export default defineNuxtRouteMiddleware((from, to) => {
    if (import.meta.server) return;
    console.log(from, to);
});
