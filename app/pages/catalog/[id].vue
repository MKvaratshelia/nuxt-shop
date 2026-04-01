<script setup lang="ts">
import type { Product } from "~/interfaces/product.interface";

const route = useRoute();
const API_URL = useAPI();
const { data } = await useFetch<{ product: Product }>(API_URL + "/products/" + route.params.id);
// useSeoMeta({
//   title: `Купить - ${data.value?.product.name}`,
//   description: data.value?.product.short_description,
// });
</script>

<template>
    <div>
        <Head>
            <Title>Купить - {{ data?.product.name }}</Title>
            <Meta
                name="description"
                :content="data?.product.short_description"
            />
        </Head>
        <div>{{ data?.product.name }}</div>
    </div>
</template>
