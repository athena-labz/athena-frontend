import { createContext, useState, ReactNode, useContext, useEffect } from 'react';

type Role = "freelancer" | "customer" | "mediator";

type UserInfoData = {
  isLogged: boolean;
  role: Role | null;
  name: string | null;
  email: string | null;
  password: string | null;
}

type UserContextData = {
  user: UserInfoData;
  register: (role: Role, name: string, email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

type UserContextProviderProps = {
  children: ReactNode;
}

export const UserContext_ = createContext({} as UserContextData);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userInfo, setUserInfo] = useState<UserInfoData>({
    isLogged: false,
    role: null,
    name: null,
    email: null,
    password: null
  })

  if (typeof window !== "undefined") {
    useEffect(() => {
      setUserInfo((
        window.sessionStorage.getItem('userInfo') !== null ? (
          JSON.parse(sessionStorage.getItem('userInfo')!)
        ) : userInfo
      ))
    }, [window])
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
  }, [userInfo]);

  function saveInfo(role: Role, name: string, email: string, password: string) {
    if (name !== "" && password !== "")
      setUserInfo({
        ...userInfo,
        role: role,
        name: name,
        email: email,
        password: password
      })
  }

  function clearInfo() {
    setUserInfo({
      isLogged: false,
      role: null,
      name: null,
      email: null,
      password: null
    });
  }

  function register(role: Role, name: string, email: string, password: string) {
    saveInfo(role, name, email, password);

    console.log("Registering user")
    console.log({
      role: role,
      name: name,
      email: email,
      password: password
    })

    // Should then
    // * Back-end make sure there is no such name or email yet
    // * Send an email confirmation
    // * Register user in the DB
    // * Back-end register user info
    // * Clear user password
  }

  function login(email: string, password: string) {
   // if (email === userInfo.email && password === userInfo.password) {
      setUserInfo({ ...userInfo, isLogged: true })
  //  }

    // In the real application it should:
    // * Back-end compare password hash to password in the DB
    // * If it matches, return user info and let him log-in
    // * Otherwise, warn user that he has the wrong password / email
  }

  return (
    <UserContext_.Provider value={{
      user: userInfo,
      register: register,
      login: login,
      logout: clearInfo
    }}>
      {children}
    </UserContext_.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext_)
}