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
  getToken: () => string | null;
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
  applyProject: (id:string) => void;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext_ = createContext({} as UserContextData);

export function UserContextProvider({ children }: UserContextProviderProps) {
  function getUser() {
    const user = localStorage.getItem("user");

    if (user === null)
      return null
    else
      return JSON.parse(user);
  }

  function getToken() {
    const token = localStorage.getItem("user");

    if (!token) {
      return null;
    } else {
      return token
    }
  }

  function isSignedIn() {
    if (typeof window !== "undefined") {
      const user = getUser();

      if (user !== null)
        return user.isSignedIn;
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
    const user = {
      name,
      email,
      role,
      address,
      password,
      pubkeyhash: addrToPubKeyHash(address),
      isSignedIn: true
    };

    localStorage.setItem("user", JSON.stringify(user));
  }

  async function login(email: string, password: string) {
    const user = getUser();

    if (user === null)
      return Promise.reject("No user registered!")
    else if (email !== user.email || password !== user.password)
      return Promise.reject("Incorrect email or password")
    else {
      localStorage.setItem("user", JSON.stringify({...user, isSignedIn: true}));
    }
  }

  function logout() {
    const user = getUser();

    if (user !== null)
      localStorage.setItem("user", JSON.stringify({...user, isSignedIn: false}));
  }

  function applyProject(id:string) {
    localStorage.setItem(`project-${id}`,"applyed" );
  }

  return (
    <UserContext_.Provider
      value={{
        isSignedIn,
        getUser,
        getToken,
        register: register,
        login: login,
        logout: logout,
        applyProject
      }}
    >
      {children}
    </UserContext_.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext_);
};
