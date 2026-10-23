import { onBeforeMount, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useInitBridge } from "./useInitBridge";
import { useStorePayment, type IPaymentCompletedData, type IPaymentFailedData } from "@/composable/state/useStorePayment";

/**
 * registerHandler:buyNowCallBack
 * callHandler:buyNow
 */
export const useBuy = () => {
  const { bridge } = useInitBridge();
  const storePayment = useStorePayment();
  const { isSuccess, isFailed, paymentCompleted, paymentFailed } = storeToRefs(storePayment);

  onBeforeMount(() => {
    storePayment.setPaymentCompleted(null);
    storePayment.setPaymentFailed(null);
  });

  onMounted(() => {
    bridge.registerHandler("payment.completed", (data: IPaymentCompletedData) => {
      storePayment.setPaymentCompleted(data ?? {});
    });

    bridge.registerHandler("payment.failed", (data: IPaymentFailedData) => {
      storePayment.setPaymentFailed(data ?? {});
    });
  });

  const onBuyNow = (amount?: number) => {
    const reference = `ORDER-${Math.floor(10000 + Math.random() * 90000)}`;
    const requestId = `PAY-${Date.now()}-${Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0")}`;
    bridge.callHandler("payment.requested", { amount, currency: "USD", requestId, reference });
  };

  return { isSuccess, isFailed, paymentCompleted, paymentFailed, onBuyNow };
};
