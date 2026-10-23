<script lang="ts" setup>
import LogoIcon from "@/components/c-icons/LogoIcon.vue";
import CButton from "@/components/shared/c-button/CButton.vue";
import CLoading from "@/components/shared/c-loading/CLoading.vue";
import router from "@/router";
import { onMounted, ref } from "vue";

import appData from "@/composable/json/appInfo.json";
import { useAppInfo } from "@/composable/bridge-getway/useAppInfo";

const loading = ref(true);

const { onSubmitApp } = useAppInfo();

const onAccept = () => {
  onSubmitApp();
  localStorage.setItem("acceptTerm", "accepted");
  router.push("/");
};

const onReject = () => {
  localStorage.setItem("acceptTerm", "rejected");
  router.push("/unaccepted-term-condition");
};

onMounted(() => {
  setTimeout(() => (loading.value = false), 1000);
});
</script>
<template>
  <div class="bg-gray-100 h-dvh">
    <CLoading v-if="loading" />
    <div v-else class="flex flex-col h-full p-4 gap-2">
      <h1 class="border-b border-gray-300 text-lg font-semibold text-gray-700 pt-2 pb-4">Term of Service</h1>
      <div class="flex-1 gap-2 flex flex-col items-center justify-center">
        <div class="size-16 mx-auto text-orange-500 bg-white rounded-full p-2">
          <LogoIcon />
        </div>
        <div class="text-center">
          <h1 class="text-lg font-bold text-gray-700 pb-2">{{ appData.name }}</h1>
          <p class="text-sm text-gray-600 text-center">
            {{ appData.description }}
          </p>
        </div>
      </div>
      <footer class="space-y-3">
        <div class="text-xs text-gray-800 text-left pb-4">
          By using the Flower Shop service, you agree to
          <span class="text-[#026791] font-semibold underline underline-offset-2">ABA’s Terms and Conditions</span> and to share with us your personal
          information such as your full name, email address and phone number.
        </div>
        <div>
          <CButton @click="onAccept" isFull color="primary">
            <div class="text-lg">Accept</div>
          </CButton>
        </div>
        <div>
          <CButton @click="onReject" outline isFull color="primary">
            <div class="text-lg">Cancel</div>
          </CButton>
        </div>
      </footer>
    </div>
  </div>
</template>
