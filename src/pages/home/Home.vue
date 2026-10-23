<script lang="ts" setup>
import SquareIcon from "@/components/c-icons/SquareIcon.vue";
import CLoading from "@/components/shared/c-loading/CLoading.vue";
import CProductItem from "@/components/shared/c-product-item/CProductItem.vue";
import { useUserInfo } from "@/composable/bridge-getway/useUserInfo";
import { useGetProductList } from "@/composable/useGetListProductList";
import Layout from "@/layout/Layout.vue";
import router from "@/router";
import { onMounted } from "vue";

const { data, loading, fetchList } = useGetProductList();
const { user, requestUserInfo } = useUserInfo();

onMounted(() => {
  fetchList();
  if (!user.value) {
    requestUserInfo(["basic"], "Personalize your home screen");
  }
});
</script>
<template>
  <Layout>
    <CLoading v-if="loading" />
    <div v-else class="flex flex-col h-full text-sm gap-2 p-4">
      <div class="flex items-center gap-2 text-sm text-gray-500">
        <img v-if="user?.avatarUrl" :src="user.avatarUrl" alt="" class="size-6 rounded-full object-cover" />
        <span>Hi, {{ user?.displayName || "n/a" }}</span>
      </div>
      <div class="flex gap-2 justify-between">
        <div class="font-semibold">Recommendation</div>
        <div class="text-gray-500">
          <SquareIcon />
        </div>
      </div>
      <div class="flex-1 overflow-auto relative">
        <ul class="grid grid-cols-2 gap-x-4 gap-y-6">
          <li v-for="product in data" :key="product.id">
            <CProductItem @buy-now="router.push(`/checkout/${product.id}`)" :product="product" />
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>
