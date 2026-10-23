<script lang="ts" setup>
import CButton from "../c-button/CButton.vue";

withDefaults(
  defineProps<{
    open: boolean;
    title?: string;
    message?: string;
    confirmLabel?: string;
    cancelLabel?: string;
  }>(),
  {
    title: "Exit App?",
    message: "Are you sure you want to exit the app?",
    confirmLabel: "Exit",
    cancelLabel: "Cancel",
  }
);

const emits = defineEmits<{
  (e: "confirm"): void;
  (e: "cancel"): void;
}>();
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div class="absolute inset-0 bg-black/40" @click="emits('cancel')" />
      <div class="relative w-full max-w-sm bg-white rounded-lg p-5 space-y-5 shadow-lg">
        <div class="space-y-1.5 text-center">
          <h5 class="text-lg font-semibold text-primary-dark">{{ title }}</h5>
          <p v-if="message" class="text-sm text-gray-500">{{ message }}</p>
        </div>
        <div class="flex gap-3">
          <CButton isFull outline color="secondary" @click="emits('cancel')">
            <span class="text-base block">{{ cancelLabel }}</span>
          </CButton>
          <CButton isFull color="primary" @click="emits('confirm')">
            <span class="text-base block">{{ confirmLabel }}</span>
          </CButton>
        </div>
      </div>
    </div>
  </Teleport>
</template>
