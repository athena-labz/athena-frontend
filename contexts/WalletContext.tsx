import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

import WALLET_DATA from "../data/Wallet";

const WALLETS = WALLET_DATA.wallets; // null to accept any wallets

declare global {
  interface Window {
    cardano: any;
  }
}

type API = {
  getBalance: () => any,
  signData: (address: any, payload: any) => any,
  signTx: (tx: any, partialSign: any) => any,
  submitTx: (tx: any) => any,
  getUtxos: (amount: any, paginate: any) => any,
  getUsedAddresses: () => [any],
  getUnusedAddresses: () => [],
  getChangeAddress: () => any,
  getRewardAddresses: () => [any],
  getNetworkId: () => any,
  getCollateral: () => any
}

type UninstalledWalletData = {
  name: string,
  primaryColor: string,
  secundaryColor: string,
  store: string,
  installed: false
}

type WalletData = {
  enable: () => Promise<API>,
  isEnabled: () => Promise<API>,
  apiVersion: string,
  name: string,
  icon: string,
  primaryColor: string,
  secundaryColor: string,
  store: string,
  installed: true
}

type WalletContextData = {
  getWallets: () => Dict<WalletData | UninstalledWalletData>,
  curWallet: WalletData | null,
  connect: (name: string) => Promise<API>
}

type WalletContextContextProviderProps = {
  children: ReactNode;
};

interface Dict<T> {
  [key: string]: T;
}

export const WalletContext_ = createContext({} as WalletContextData);

export function WalletContextProvider({ children }: WalletContextContextProviderProps) {
  const [curWallet, setCurWallet] = useState<WalletData | null>(null);

  const getWallets = () => {
    if (typeof window !== "undefined" && window.cardano) {
      let wallets: Dict<WalletData | UninstalledWalletData> = {}

      for (const [key, value] of Object.entries(WALLETS)) {
        if (key in window.cardano)
          wallets[key] = {...window.cardano[key], ...value, installed: true}
        else
          wallets[key] = {...value, installed: false}
      }
      return wallets;
    }
    else return {};
  };

  const connect = async (name: string) => {
    const wallets = getWallets();

    if (name in wallets && wallets[name].installed) {
      const wallet: any = wallets[name];
      const api = await (wallet.enable());

      setCurWallet(api);
      return Promise.resolve(api);
    } else if (name in wallets && !wallets[name].installed) {
      window.open(wallets[name].store);
    } else {
      return Promise.reject("Unknown wallet index");
    }
  };

  return (
    <WalletContext_.Provider
      value={{
        getWallets,
        curWallet,
        connect,
      }}
    >
      {children}
    </WalletContext_.Provider>
  );
}

export const useWallet = () => {
  return useContext(WalletContext_);
};
