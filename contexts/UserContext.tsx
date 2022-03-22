import { createContext, ReactNode, useContext } from "react";

import Router from "next/router";

import axios from "axios";

import jwt_decode from "jwt-decode";

import { addrToPubKeyHash, signTx } from "../wallet/utils";

import { API } from "../contexts/WalletContext";

type Role = "Proposer" | "Contributor" | "Mediator";

type UserContextData = {
  isSignedIn: () => boolean;
  getUser: () => any;
  register: (
    role: Role,
    name: string,
    email: string,
    address: string,
    password: string,
    api: API
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

type UserContextProviderProps = {
  children: ReactNode;
};

const backend = axios.create({
  baseURL: "http://127.0.0.1:5000/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const UserContext_ = createContext({} as UserContextData);

export function UserContextProvider({ children }: UserContextProviderProps) {
  function getUser() {
    const token = localStorage.getItem("user");
    if (!token) {
      return null;
    }

    return jwt_decode(token);
  }

  function isSignedIn() {
    if (typeof window !== "undefined") {
      return getUser() !== null;
    }

    return false;
  }

  async function register(
    role: Role,
    name: string,
    email: string,
    address: string,
    password: string,
    api: API
  ) {
    try {
      const res = await backend.post("/register", {
        name,
        email,
        role,
        address,
        password,
        pubkeyhash: addrToPubKeyHash(address),
      });

      const txHash = await signTx(api, res.data.transaction);

      const confirm_res = await backend.post("/confirm-register", {
        token: res.data.access_token,
        tx_hash: txHash,
      });

      if (getUser() === null)
        localStorage.setItem("user", confirm_res.data.access_token);

      Router.push("/");

      return Promise.resolve();
    } catch (error: any) {
      return Promise.reject(error);
    }
  }

  async function login(email: string, password: string) {
    try {
      const res = await backend.post("/login", {
        email: email,
        password: password,
      });

      if (getUser() === null)
        localStorage.setItem("user", res.data.access_token);

      return Promise.resolve();
    } catch (error: any) {
      return Promise.reject(error);
    }
  }

  function logout() {
    localStorage.removeItem("user");
  }

  return (
    <UserContext_.Provider
      value={{
        isSignedIn,
        getUser,
        register: register,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </UserContext_.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext_);
};
