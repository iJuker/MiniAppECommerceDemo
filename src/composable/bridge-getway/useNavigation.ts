import { onMounted, ref, type Ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useInitBridge } from "./useInitBridge";

const HOME_PATH = "/";

export interface IUseNavigation {
  isConfirmExitOpen: Ref<boolean>;
  onConfirmExit: () => void;
  onCancelExit: () => void;
}

/**
 * registerHandler: navigation.back_pressed
 * callHandler: navigation.exit.app
 */
export const useNavigation = (): IUseNavigation => {
  const { bridge } = useInitBridge();
  const router = useRouter();
  const route = useRoute();

  const isConfirmExitOpen = ref(false);

  const onConfirmExit = () => {
    isConfirmExitOpen.value = false;
    bridge.callHandler("navigation.exit.app", {});
  };

  const onCancelExit = () => {
    isConfirmExitOpen.value = false;
  };

  onMounted(() => {
    bridge.registerHandler("navigation.back_pressed", () => {
      if (route.path === HOME_PATH) {
        isConfirmExitOpen.value = true;
        return;
      }
      router.back();
    });
  });

  return { isConfirmExitOpen, onConfirmExit, onCancelExit };
};
