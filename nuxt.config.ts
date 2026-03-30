// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    imports: {
        autoImport: true,
    },
    runtimeConfig: {
        token: "",
        public: {
            apiurl: "",
        },
    },
    icon: {
        customCollections: [
            {
                prefix: "icons",
                dir: "./app/assets/icons",
            },
        ],
    },
    modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/image", "@nuxt/scripts", "@nuxt/icon"],
});
