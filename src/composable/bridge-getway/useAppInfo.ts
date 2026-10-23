import { useInitBridge } from "./useInitBridge";
import appInfo from "@/composable/json/appInfo.json";

// Handle App Info

export interface IAppInfo {
  name: string;
  logo: string;
  description: string;
  email: string;
  address: string;
}

// Handler:"submitApp"
export const useAppInfo = () => {
  const { bridge } = useInitBridge();

  const onSubmitApp = () => {
    bridge.callHandler("submitApp", appInfo, () => {});
  };

  return { onSubmitApp };
};
