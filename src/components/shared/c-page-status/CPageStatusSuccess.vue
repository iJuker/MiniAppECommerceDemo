<script lang="ts" setup>
import CheckIcon from "@/components/c-icons/CheckIcon.vue";
import CButton from "../c-button/CButton.vue";
import { useRouter } from "vue-router";
import type { IPaymentCompletedData } from "@/composable/state/useStorePayment";

defineProps<{
  payment?: IPaymentCompletedData | null;
}>();

const router = useRouter();
</script>
<template>
  <div class="h-dvh flex flex-col bg-gray-100 p-4">
    <div class="flex-1 overflow-auto flex items-center justify-center">
      <div class="w-full space-y-5">
        <div class="text-center space-y-3">
          <div class="size-24 mx-auto bg-green-500 text-white rounded-full p-2">
            <CheckIcon />
          </div>
          <h5 class="text-lg text-gray-700 font-semibold">Payment Success</h5>
          <p class="text-gray-500 text-sm">Shop owner will preparing your order and sent out asap. Thanks for purchasing.</p>
        </div>
        <div v-if="payment" class="bg-white p-4 rounded-lg space-y-1.5 text-sm">
          <article class="flex gap-2 justify-between">
            <div class="text-gray-400">Order:</div>
            <div class="text-gray-700 break-all text-right">{{ payment.reference }}</div>
          </article>
          <article class="flex gap-2 justify-between">
            <div class="text-gray-400">Transaction:</div>
            <div class="text-gray-700 break-all text-right">{{ payment.transactionId }}</div>
          </article>
          <article class="flex gap-2 justify-between">
            <div class="text-gray-400">Request:</div>
            <div class="text-gray-700 break-all text-right">{{ payment.requestId }}</div>
          </article>
          <article class="flex gap-2 justify-between">
            <div class="text-gray-400">Amount:</div>
            <div class="text-gray-700">{{ payment.amount }} {{ payment.currency }}</div>
          </article>
          <article class="flex gap-2 justify-between">
            <div class="text-gray-400">Status:</div>
            <div class="text-green-600 font-medium uppercase">{{ payment.status }}</div>
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
