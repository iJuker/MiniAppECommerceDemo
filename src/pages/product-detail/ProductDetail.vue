<script lang="ts" setup>
import CButton from "@/components/shared/c-button/CButton.vue";
import CLoading from "@/components/shared/c-loading/CLoading.vue";
import { useGetListProductDetail } from "@/composable/useGetListProductDetail";
import getRandomBgColor from "@/helper/getRandomBgColor";
import Layout from "@/layout/Layout.vue";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const listColor = ["bg-black", "bg-white", "bg-red-500"];
const { data, loading, fetchData } = useGetListProductDetail();
const route = useRoute();
const router = useRouter();

onMounted(() => {
  fetchData(+route.params.id);
});

const onCheckout = () => {
  router.push(`/checkout/${route.params.id}`);
};
</script>
<template>
  <Layout>
    <div v-if="loading" class="h-full flex flex-col justify-center items-center">
      <CLoading />
    </div>
    <div v-else class="h-full flex flex-col py-2">
      <div class="flex-1 overflow-auto">
        <div class="space-y-4">
          <section class="relative aspect-square rounded-xl flex items-center justify-center">
            <img :class="getRandomBgColor()" class="size-full rounded-4xl p-12 aspect-square object-contain" :src="data?.imgSrc" />
          </section>
          <section>
            <div class="flex items-center gap-3 justify-between">
              <h2 class="font-semibold text-xl text-gray-600">
                {{ data?.title }}
              </h2>
              <p class="text-sm text-gray-500">Available in Stock</p>
            </div>
          </section>
          <section class="flex gap-4 items-center justify-between">
            <h2 class="text-primary font-semibold text-4xl">{{ data?.price }}</h2>
            <div class="flex gap-2">
              <div
                v-for="(value, index) in listColor"
                :class="[value, { 'ring-primary ring-2': index === 0 }]"
                class="border-2 text-xs shrink-0 border-gray-300 size-8 rounded-lg"
              ></div>
            </div>
          </section>
          <section class="text-sm text-gray-600 pt-4">
            {{ data?.description }}
          </section>
        </div>
      </div>
      <footer class="pt-4">
        <CButton @click="onCheckout" isFull color="primary"> <span class="block text-lg"> Checkout </span> </CButton>
      </footer>
    </div>
  </Layout>
</template>
