<script lang="ts" setup>
import CButton from "@/components/shared/c-button/CButton.vue";
import CLoading from "@/components/shared/c-loading/CLoading.vue";
import CPageStatusSuccess from "@/components/shared/c-page-status/CPageStatusSuccess.vue";
import CPageStatusFail from "@/components/shared/c-page-status/CPageStatusFail.vue";
import CProductItemList from "@/components/shared/c-product-item-list/CProductItemList.vue";
import { useBuy } from "@/composable/bridge-getway/useBuy";
import { useGetListProductDetail } from "@/composable/useGetListProductDetail";
import Layout from "@/layout/Layout.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const { data, loading, fetchData } = useGetListProductDetail();

const route = useRoute();

const { isSuccess, isFailed, paymentCompleted, paymentFailed, onBuyNow } = useBuy();

onMounted(() => {
  fetchData(+route.params.id);
});
</script>

<template>
  <CPageStatusSuccess v-if="isSuccess" :payment="paymentCompleted" />
  <CPageStatusFail v-else-if="isFailed" :payment="paymentFailed" />
  <Layout v-else>
    <div v-if="loading" class="h-full flex flex-col justify-center items-center">
      <CLoading />
    </div>
    <div v-else class="h-full flex flex-col py-2">
      <header class="text-lg font-semibold pb-5 text-primary-dark">Checkout</header>
      <div class="flex-1 overflow-auto space-y-5">
        <div>
          <div class="font-semibold pb-2 text-primary-dark">Items</div>
          <ul>
            <li>
              <CProductItemList :product="data" />
            </li>
          </ul>
        </div>
        <section>
          <div class="font-semibold pb-2 text-primary-dark">Payment Info</div>
          <div class="bg-gray-50 p-4 rounded-lg space-y-1.5">
            <article class="flex gap-2 justify-between">
              <div class="text-gray-400">Subtotal:</div>
              <div>{{ data?.price }}</div>
            </article>
            <article class="flex gap-2 justify-between">
              <div class="text-gray-400">Shopping Fee:</div>
              <div>$ 0.00</div>
            </article>
            <article class="flex gap-2 justify-between">
              <div class="text-gray-400">Total:</div>
              <div>{{ data?.price }}</div>
            </article>
          </div>
        </section>
      </div>
      <footer class="bg-primary/5 p-4 rounded-lg">
         <div>
        Payment Callback: {{ String(isSuccess) }}
      </div>
        <h2 class="text-xl font-bold pb-4 text-right flex gap-2 justify-between">
          <div class="text-gray-500">Total</div>
          <div class="text-primary-dark">{{ data?.price }}</div>
        </h2>
        <CButton @click="() => onBuyNow(data?.priceNumber)" isFull color="primary"> <span class="text-lg block"> Buy Now </span> </CButton>
      </footer>
    </div>
  </Layout>
</template>
