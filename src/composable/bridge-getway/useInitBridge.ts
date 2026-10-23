import { getCurrentInstance } from "vue";

export const useInitBridge = () => {
  let bridge: any;
  const internalInstance = getCurrentInstance();
  bridge = internalInstance?.appContext.config.globalProperties.$bridge;
  return { bridge };
};
