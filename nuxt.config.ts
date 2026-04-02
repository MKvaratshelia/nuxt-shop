// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    imports: {
        autoImport: true,
    },

    // routeRules: {
    //     // страница один раз будет сгенерирована на сервере и отдана, изменения только при пересборке
    //     "/about": { prerender: true },
    //     // данные будут ревалидироваться либо при перезагрузке страницы либо по времени
    //     "/": {swr: true}
    // },
    //переводим на csr по факту обычный vue
    // ssr: false,
    runtimeConfig: {
        token: "",
        public: {
            apiurl: "",
            imageurl: "",
        },
    },
    postcss: {
        plugins: {
            "postcss-nested": {},
        },
    },
    app: {
        head: {
            title: "Магазин Shoppe",
            titleTemplate: "%s | Shoppe",
            htmlAttrs: {
                lang: "ru",
            },
            link: [
                { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
                { rel: "manifest", crossorigin: "anonymous", href: "/manifest.webmanifest" },
                { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" },
            ],
        },
    },
    nitro: {
        storage: {
            db: {
                driver: "fs-lite",
                base: "./db",
            },
        },
    },

    sitemap: {
        sources: ["/api/sitemap/urls"],
        defaults: {
            lastmod: new Date().toISOString(),
            priority: 0.5,
            changefreq: "weekly",
        },
    },
    robots: {
        disallow: ["/account"],
    },
    icon: {
        customCollections: [
            {
                prefix: "icons",
                dir: "./app/assets/icons",
            },
        ],
    },
    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/image",
        "@nuxt/scripts",
        "@nuxt/icon",
        "@pinia/nuxt",
        "pinia-plugin-persistedstate/nuxt",
        "@nuxtjs/sitemap",
        "@nuxtjs/robots",
    ],
});
