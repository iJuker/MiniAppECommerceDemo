import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useInitBridge } from "./useInitBridge";
import { useStoreUser, type IUserInfoCompletedData, type IUserInfoFailedData } from "@/composable/state/useStoreUser";

export type UserInfoScope = "basic" | "phone" | "email" | "language";

/**
 * callHandler: user.info.requested
 * registerHandler: user.info.completed, user.info.failed
 */
export const useUserInfo = () => {
  const { bridge } = useInitBridge();
  const storeUser = useStoreUser();
  const { user } = storeToRefs(storeUser);
  const error = ref<IUserInfoFailedData | null>(null);
  let lastRequestId = "";

  onMounted(() => {
    bridge.registerHandler("user.info.completed", (data: IUserInfoCompletedData) => {
      if (data?.requestId !== lastRequestId) return;
      error.value = null;
      storeUser.setUser(data.userInfo ?? null);
    });

    bridge.registerHandler("user.info.failed", (data: IUserInfoFailedData) => {
      if (data?.requestId !== lastRequestId) return;
      error.value = data;
      console.warn("user.info.failed", data);
    });
  });

  const requestUserInfo = (scopes: UserInfoScope[], reason?: string) => {
    const d = new Date();
    const date = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
    const requestId = `USR-${date}-${Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0")}`;
    lastRequestId = requestId;
    bridge.callHandler("user.info.requested", { requestId, scopes, reason });
  };

  return { user, error, requestUserInfo };
};
