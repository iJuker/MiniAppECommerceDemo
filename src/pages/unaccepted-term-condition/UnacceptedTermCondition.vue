<script lang="ts" setup>
import CButton from "@/components/shared/c-button/CButton.vue";
import { useAppInfo } from "@/composable/bridge-getway/useAppInfo";
import router from "@/router";

const { onSubmitApp } = useAppInfo();

const onAccept = () => {
  onSubmitApp();
  
  localStorage.setItem("acceptTerm", "accepted");
  router.push("/");
};
</script>
<template>
  <div class="bg-gray-100 h-dvh">
    <div class="flex flex-col h-full p-4 gap-2">
      <h1 class="border-b border-gray-300 text-lg font-semibold text-gray-700 pt-2 pb-4">Terms & Conditions Required</h1>

      <footer class="space-y-3 flex flex-col justify-center flex-1">
        <div class="text-gray-800 text-left pb-4">
          You must accept our Terms & Conditions before you can continue. Please review them below and click "Accept" to proceed.
        </div>
        <div>
          <CButton @click="onAccept" isFull color="primary">
            <div class="text-lg">Accept</div>
          </CButton>
        </div>
      </footer>
    </div>
  </div>
</template>
