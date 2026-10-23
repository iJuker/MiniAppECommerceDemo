import router from "@/router";
import { defineStore } from "pinia";

type AcceptType = "init" | "accepted" | "rejected";

export const useAcceptTerm = defineStore("acceptTerm", {
  state: () => ({ acceptType: "init" as AcceptType }),
  actions: {
    onAccept() {
      this.acceptType = "accepted";
      router.push("/");
    },
    onCancel() {
      this.acceptType = "rejected";
      router.push("/unaccepted-term-condition");
    },
  },
});
