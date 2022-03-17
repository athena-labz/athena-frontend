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

type UserInfoData = {
  isLogged: boolean;
  role: Role | null;
  name: string | null;
  email: string | null;
  address: string | null;
  password: string | null;
};

type UserContextData = {
  user: UserInfoData;
  saveInfo: (role: Role, name: string, email: string, password: string) => void;
  register: (address: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
};

type UserContextProviderProps = {
  children: ReactNode;
};

const backend = axios.create({
  baseURL: "http://127.0.0.1:5000/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true
});

export const UserContext_ = createContext({} as UserContextData);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userInfo, setUserInfo] = useState<UserInfoData>({
    isLogged: false,
    role: null,
    name: null,
    email: null,
    address: null,
    password: null,
  });

  if (typeof window !== "undefined") {
    useEffect(() => {
      setUserInfo(
        window.localStorage.getItem("userInfo") !== null
          ? JSON.parse(sessionStorage.getItem("userInfo")!)
          : userInfo
      );
    }, [window]);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  }, [userInfo]);

  function saveInfo(role: Role, name: string, email: string, password: string) {
    if (name !== "" && password !== "")
      setUserInfo({
        ...userInfo,
        role: role,
        name: name,
        email: email,
        password: password,
      });
  }

  function getUser() {
    const token = localStorage.getItem("user");
    if (!token) {
      return null;
    }

    return jwt_decode(token);
  }

  function register(address: string) {
    const arg = {
      name: userInfo.name,
      email: userInfo.email,
      role: userInfo.role,
      address: address,
      password: userInfo.password,
    }

    backend
      .post("/register", arg)
      .then((res) => {
        setUserInfo({ ...userInfo, address, isLogged: true });

        if (getUser() === null)
          localStorage.setItem("user", res.data.access_token)
        
        console.log(getUser())

        // clearInfo();
        Router.push("/");
      })
      .catch((error) => {
        clearInfo();

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
      .then(res => {
        if (getUser() === null)
          localStorage.setItem("user", res.data.access_token)
  
        console.log(getUser())

        Router.push("/");
      })
      .catch(error => {
          if (error.response && error.response.status === 401) {
            console.error(error.response.data.message);
          } else {
              throw error;
          }
      });
  }

  function clearInfo() {
    setUserInfo({
      isLogged: false,
      role: null,
      name: null,
      email: null,
      address: null,
      password: null,
    });
  }

  // function login(email: string, password: string) {
  //   if (email === userInfo.email && password === userInfo.password) {
  //     setUserInfo({ ...userInfo, isLogged: true });
  //   }

  //   // In the real application it should:
  //   // * Back-end compare password hash to password in the DB
  //   // * If it matches, return user info and let him log-in
  //   // * Otherwise, warn user that he has the wrong password / email
  // }

  return (
    <UserContext_.Provider
      value={{
        user: userInfo,
        saveInfo: saveInfo,
        register: register,
        login: login,
        logout: clearInfo,
      }}
    >
      {children}
    </UserContext_.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext_);
};
