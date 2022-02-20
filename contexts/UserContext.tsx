import { createContext,useState,ReactNode, useContext } from 'react';

type UserContextData= {
    isLogged:boolean;
    name:string;
    login:(username:string,password:string) => void ;
    logout:() => void;
}

type UserContextProviderProps = {
    children: ReactNode;
}

export const UserContext_ = createContext( {} as UserContextData);

export function UserContextProvider({children}:UserContextProviderProps){
    const [userInfo, setUserInfo] = useState({
      isLogged:false,
      name:""
      });
  
    function saveInfo (name:string,password:string){
        if(name !== "" && password !== "")
          setUserInfo({name:name, isLogged:true})       
    }

    function clearInfo(){
      setUserInfo({
        isLogged:false,
        name:""
      });
    }

    return(
      <UserContext_.Provider value={{
        isLogged:userInfo.isLogged,
        name:userInfo.name,
        login:saveInfo,
        logout:clearInfo
      }}>
           {children}
      </UserContext_.Provider>
    )
}

export const useUser = () => {
  return useContext(UserContext_)
}