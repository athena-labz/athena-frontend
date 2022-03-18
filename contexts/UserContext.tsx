import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

import Router from "next/router";

import axios from "axios";

import jwt_decode from "jwt-decode";

type Role = "Proposer" | "Contributor" | "Mediator";

type UserContextData = {
  isSignedIn: () => boolean;
  getUser: () => any;
  register: (role: Role, name: string, email: string, address: string, password: string) => void;
  login: (email: string, password: string) => void;
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

  function register(
    role: Role,
    name: string,
    email: string,
    address: string,
    password: string
  ) {
    const arg = {
      name,
      email,
      role,
      address,
      password,
    };

    console.log(arg);

    backend
      .post("/register", arg)
      .then((res) => {
        if (getUser() === null)
          localStorage.setItem("user", res.data.access_token);

        Router.push("/");
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          console.error(error.response.data.message);
        } else {
          throw error;
        }
      });
  }

  function login(email: string, password: string) {
    backend
      .post("/login", { email: email, password: password })
      .then((res) => {
        if (getUser() === null)
          localStorage.setItem("user", res.data.access_token);

        Router.push("/");
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          console.error(error.response.data.message);
        } else {
          throw error;
        }
      });
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
