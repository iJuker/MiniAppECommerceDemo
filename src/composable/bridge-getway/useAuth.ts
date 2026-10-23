import { onMounted, ref } from "vue";
import { useInitBridge } from "./useInitBridge";

interface IUserData {
  accountName?: string;
}
// registerHandler: auth
export const useAuth = () => {
  const { bridge } = useInitBridge();
  const userData = ref<IUserData | null>(null);

  onMounted(() => {
    // Register handler for native → JS call
    bridge.registerHandler("auth", (data: IUserData | null, callback: any) => {
      userData.value = data;
      callback({
        status: 200,
      });
    });
  });

  return { userData };
};
