<script lang="ts" setup>
import "@/assets/css/global.css";
import CConfirmDialog from "@/components/shared/c-confirm-dialog/CConfirmDialog.vue";
import { useNavigation } from "@/composable/bridge-getway/useNavigation";

const { isConfirmExitOpen, onConfirmExit, onCancelExit } = useNavigation();
</script>
<template>
  <RouterView />
  <CConfirmDialog :open="isConfirmExitOpen" @confirm="onConfirmExit" @cancel="onCancelExit" />
</template>
