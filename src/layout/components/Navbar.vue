<script lang="ts" setup>
import BellIcon from "@/components/c-icons/BellIcon.vue";
import MailIcon from "@/components/c-icons/MailIcon.vue";
import SearchIcon from "@/components/c-icons/SearchIcon.vue";
</script>
<template>
  <div class="flex gap-2 p-2  px-4">
    <div>
      <div class="font-semibold text-2xl">Online Shops</div>
    </div>
    <div class="flex-1 flex items-center justify-end gap-4">
      <div>
        <SearchIcon />
      </div>
      <div>
        <MailIcon />
      </div>
      <div>
        <BellIcon />
      </div>
    </div>
  </div>
</template>
