import { defineStore } from "pinia";

export interface IPaymentCompletedData {
  requestId: string;
  transactionId: string;
  amount: number;
  currency: string;
  reference: string;
  status: string;
}

export interface IPaymentFailedData {
  requestId: string;
  status: string;
  errorCode: string;
  message: string;
}

export const useStorePayment = defineStore("storePayment", {
  state: () => ({
    paymentCompleted: null as IPaymentCompletedData | null,
    paymentFailed: null as IPaymentFailedData | null,
  }),
  getters: {
    isSuccess: (state) => state.paymentCompleted !== null,
    isFailed: (state) => state.paymentFailed !== null,
  },
  actions: {
    setPaymentCompleted(data: IPaymentCompletedData | null) {
      this.paymentCompleted = data;
      this.paymentFailed = null;
    },
    setPaymentFailed(data: IPaymentFailedData | null) {
      this.paymentFailed = data;
      this.paymentCompleted = null;
    },
  },
});
