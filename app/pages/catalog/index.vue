<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
import type { GetCategoriesResponse } from "~/interfaces/category.interface";
import type { GetProductsResponse } from "~/interfaces/product.interface";

useSeoMeta({
    title: "Каталог товаров",
    description: "Каталог товаров магазина Shoppe с ювелирными изделиями.",
    ogDescription: "Каталог товаров магазина Shoppe с ювелирными изделиями.",
});

// useHead({
//   title: "Каталог товаров",
//   meta: [
//     {
//       name: "description",
//       content: "Каталог товаров магазина Shoppe с ювелирными изделиями.",
//     },
//   ],
// });

const API_URL = useAPI();
const route = useRoute();
const router = useRouter();
const category_id = ref(route.query.category_id?.toString() ?? "");
const search = ref(route.query.search?.toString() ?? "");

watch([category_id, search], () => {
    changeRoute(category_id, search);
});

const changeRoute = useDebounceFn((category_id, search) => {
    router.replace({
        query: { category_id: category_id.value, search: search.value },
    });
}, 100);

const query = computed(() => ({
    limit: route.query.limit ?? 20,
    offset: route.query.offset ?? 0,
    category_id: route.query.category_id || undefined,
    search: route.query.search || undefined,
}));

const { data } = await useFetch<GetCategoriesResponse>(API_URL + "/categories");

const selectDefault = { value: "", label: "Categories" };
const categoriesSelect = computed(() => {
    return data.value
        ? data.value?.categories
              .map((c) => ({
                  value: c.id.toString(),
                  label: c.name,
              }))
              .concat(selectDefault)
        : [selectDefault];
});

const { data: productsData } = await useFetch<GetProductsResponse>(API_URL + "/products", {
    key: "get-products",
    query,
});
</script>

<template>
    <div>
        <h1 class="left">Каталог товаров</h1>
        <div class="catalog">
            <div class="catalog__filter">
                <div class="catalog__search">
                    <InputField
                        v-model="search"
                        variant="gray"
                        placeholder="Поиск..."
                    />
                    <Icon
                        name="icons:search"
                        size="18px"
                    />
                </div>
                <SelectField
                    v-model="category_id"
                    :options="categoriesSelect"
                />
            </div>
            <div class="catalog__grid">
                <CatalogCard
                    v-for="product in productsData?.products"
                    :key="product.id"
                    v-bind="product"
                />
            </div>
        </div>
    </div>
</template>
<style scoped>
.catalog {
    display: flex;
    gap: 35px;
}

.catalog__filter {
    display: flex;
    flex-direction: column;
    width: 260px;
}

.catalog__search {
    position: relative;
}
.catalog__search .iconify {
    position: absolute;
    top: 12px;
    right: 8px;
}
.catalog__grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 64px 12px;
}
</style>
