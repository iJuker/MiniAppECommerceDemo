<script setup lang="ts">
import HeartIcon from "@/components/c-icons/HeartIcon.vue";
import CButton from "../c-button/CButton.vue";
import type { IProduct } from "@/composable/useGetListProductList";
import HeartFillIcon from "@/components/c-icons/HeartFillIcon.vue";
import getRandomBgColor from "@/helper/getRandomBgColor";
import router from "@/router";

const props = defineProps<{ product: IProduct }>();
const emits = defineEmits(["buyNow"]);


</script>
<template>
  <router-link :to="`/product/${product.id}`">
    <div class="flex gap-3 flex-col">
      <div :class="getRandomBgColor()" class="relative aspect-square rounded-xl flex items-center justify-center">
        <div class="p-7">
          <img class="size-full aspect-square object-contain" alt="" :src="product.imgSrc" />
        </div>
        <div class="absolute top-3 right-3 text-red-400">
          <HeartFillIcon v-if="product.isFavorite" />
          <HeartIcon v-else />
        </div>
      </div>
      <article>
        <p class="font-semibold line-clamp-1">
          {{ props.product.title }}
        </p>
        <div class="flex justify-between">
          <h3 class="font-semibold text-primary text-lg">
            {{ props.product.price }}
          </h3>
          <div>
            <CButton @click="router.push(`/checkout/${product.id}`)" color="secondary"> Buy </CButton>
          </div>
        </div>
      </article>
    </div>
  </router-link>
</template>
