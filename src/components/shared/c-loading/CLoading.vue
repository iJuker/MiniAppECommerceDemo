<script setup lang="ts">
import LogoIcon from "@/components/c-icons/LogoIcon.vue";
</script>

<template>
  <div class="w-fit mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div class="size-12 mx-auto text-primary animate-bounce">
      <LogoIcon />
    </div>
    <div class="text-xs text-primary-dark font-bold animate-pulse">Loading...</div>
  </div>
</template>
