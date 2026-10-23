<script lang="ts" setup>
import HomeIcon from "@/components/c-icons/HomeIcon.vue";
import HomeIconFill from "@/components/c-icons/HomeIconFill.vue";
import SettingIcon from "@/components/c-icons/SettingIcon.vue";
import SettingIconFill from "@/components/c-icons/SettingIconFill.vue";
import ShoppingCartFillIcon from "@/components/c-icons/ShoppingCartFillIcon.vue";
import ShoppingCartIcon from "@/components/c-icons/ShoppingCartIcon.vue";
import { useRoute } from "vue-router";

const route = useRoute();

function isActive(path: string) {
  return route.path === path;
}
</script>
<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/product">About</router-link>
  </nav> -->
  <div class="px-8 py-2 border-t border-gray-100">
    <ul class="flex justify-between">
      <li>
        <router-link to="/">
          <div
            :class="{ ' !text-primary ': isActive('/') }"
            class="flex cursor-pointer flex-col justify-center text-center items-center font-semibold text-gray-600"
          >
            <div>
              <HomeIconFill v-if="isActive('/')" />
              <HomeIcon v-else />
            </div>
            <p class="text-sm">Home</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/cart">
          <div
            :class="{ ' !text-primary': isActive('/cart') }"
            class="flex cursor-pointer flex-col justify-center text-center items-center font-semibold text-gray-600"
          >
            <div>
              <ShoppingCartFillIcon v-if="isActive('/cart')" />
              <ShoppingCartIcon v-else />
            </div>
            <p class="text-sm">Cart list</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/setting">
          <div
            :class="{ ' !text-primary': isActive('/setting') }"
            class="flex cursor-pointer flex-col justify-center text-center items-center font-semibold text-gray-600"
          >
            <div>
              <SettingIconFill v-if="isActive('/setting')" />
              <SettingIcon v-else />
            </div>
            <p class="text-sm">Setting</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
