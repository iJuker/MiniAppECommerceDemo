<script lang="ts" setup>
import type { IProduct } from "@/composable/useGetListProductList";
import getRandomBgColor from "@/helper/getRandomBgColor";
const props = defineProps<{ product?: IProduct }>();
</script>

<template>
  <div class="flex gap-4 bg-gray-50 p-2 rounded-l-2xl">
    <div :class="getRandomBgColor()" class="relative size-24 aspect-square rounded-xl flex items-center justify-center">
      <div class="p-4">
        <img class="size-full aspect-square object-contain" alt="" :src="props.product?.imgSrc" />
      </div>
    </div>
    <div class="space-y-2">
      <h5 class="font-semibold">
        {{ product?.title }}
      </h5>
      <p class="text-gray-400 line-clamp-2 text-sm">
        {{ product?.description }}
      </p>
      <p class="text-primary font-semibold">{{ product?.price }} x 1</p>
    </div>
    <!-- <div>Action</div> -->
  </div>
</template>
