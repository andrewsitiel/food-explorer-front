import { useState } from "react";
import { api } from "../services/api";
import { useEffect } from "react";


export function AuthServices() {
  const [user, setUser] = useState();

  useEffect(() => {
    
    const localStorageUser = localStorage.getItem("@foodexplorer:user");
    const localStorageToken = localStorage.getItem("@foodexplorer:token");
   

    if(localStorageUser && localStorageToken) {
      api.defaults.headers.common["Authorization"] = `Bearer ${localStorageToken}`;
      
      setUser(localStorageUser);
    }

  },[])

  async function createUser ({name, email, password}) {
      return await api.post("/user",{name,email,password});
  }

  async function createAccess({email, password}){
    const {data} = await api.post("/access", {email, password});
    
    setUser(data.user);
    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

    localStorage.setItem("@foodexplorer:user", JSON.stringify(data.user));
    localStorage.setItem("@foodexplorer:token", JSON.stringify(data.token));
  }

  async function removeAccess() {
    
    setUser(undefined);
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");

  }

  return {user, createUser, createAccess, removeAccess}
}