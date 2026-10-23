import { defineStore } from "pinia";

export interface IUserInfo {
  displayName?: string;
  avatarUrl?: string;
  phoneNumber?: string;
  email?: string;
  language?: string;
}

export interface IUserInfoCompletedData {
  requestId: string;
  status: string;
  grantedScopes: string[];
  userInfo: IUserInfo;
}

export interface IUserInfoFailedData {
  requestId: string;
  status: string;
  errorCode: string;
  message: string;
}

export const useStoreUser = defineStore("storeUser", {
  state: () => ({ user: null as IUserInfo | null }),
  actions: {
    setUser(user: IUserInfo | null) {
      this.user = user;
    },
  },
});
