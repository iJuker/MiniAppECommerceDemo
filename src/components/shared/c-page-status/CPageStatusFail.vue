<script lang="ts" setup>
import CloseIcon from "@/components/c-icons/CloseIcon.vue";
import CButton from "../c-button/CButton.vue";
import { useRouter } from "vue-router";
import type { IPaymentFailedData } from "@/composable/state/useStorePayment";

defineProps<{
  payment?: IPaymentFailedData | null;
}>();

const router = useRouter();
</script>
<template>
  <div class="h-dvh flex flex-col bg-gray-100 p-4">
    <div class="flex-1 overflow-auto flex items-center justify-center">
      <div class="w-full space-y-5">
        <div class="text-center space-y-3">
          <div class="size-24 mx-auto bg-red-500 text-white rounded-full p-2">
            <CloseIcon />
          </div>
          <h5 class="text-lg text-gray-700 font-semibold">Payment Failed</h5>
          <p class="text-gray-500 text-sm">
            {{ payment?.message || "Something went wrong with your payment. Please try again." }}
          </p>
        </div>
        <div v-if="payment" class="bg-white p-4 rounded-lg space-y-1.5 text-sm">
          <article class="flex gap-2 justify-between">
            <div class="text-gray-400">Request:</div>
            <div class="text-gray-700 break-all text-right">{{ payment.requestId }}</div>
          </article>
          <article class="flex gap-2 justify-between">
            <div class="text-gray-400">Error Code:</div>
            <div class="text-gray-700 break-all text-right">{{ payment.errorCode }}</div>
          </article>
          <article class="flex gap-2 justify-between">
            <div class="text-gray-400">Status:</div>
            <div class="text-red-600 font-medium uppercase">{{ payment.status }}</div>
          </article>
        </div>
      </div>
    </div>
    <footer>
      <CButton @click="router.push('/')" isFull color="secondary">
        <div class="text-lg">Home</div>
      </CButton>
    </footer>
  </div>
</template>
