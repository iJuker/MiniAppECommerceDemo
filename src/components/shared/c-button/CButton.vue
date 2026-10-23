<script setup lang="ts">
import { computed } from "vue";

type ColorType = "default" | "primary" | "secondary";

const props = defineProps<{
  color?: ColorType;
  isFull?: boolean;
  outline?: boolean;
}>();

const emits = defineEmits<{
  (e: "click", event?: MouseEvent): void;
}>();

const colorClasses = {
  primary: "bg-primary focus:bg-primary-dark text-white",
  secondary: "bg-primary-dark text-white",
  default: "bg-gray-300 focus:bg-gray-400",
};

const colorOutLine = {
  primary: "border border-primary text-primary",
  secondary: "border border-primary-dark text-black",
  default: "border border-gray-300 text-gray-300",
};

const colors = computed(() => (props.outline ? colorOutLine : colorClasses));

// Handle click safely
function handleClick(event: MouseEvent) {
  event.preventDefault();
  emits("click", event);
}
</script>

<template>
  <button
    @click="handleClick"
    type="button"
    :class="[colors[props.color ?? 'default'], { 'w-full !rounded-lg py-2': props.isFull }]"
    class="px-4 py-1 cursor-pointer rounded-full text-xs"
  >
    <slot />
  </button>
</template>
