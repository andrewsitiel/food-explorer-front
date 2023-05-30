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
      
      setUser(JSON.parse(localStorageUser));
    }

  },[])

  async function createUser ({name, email, password}) {
    try {

      return await api.post("/user", {name, email, password});
   
    } catch (error) {
      if (error.message) {
        alert(error.response.data.message)
      } else {
          alert("Não foi possível realizar o cadastro. Por favor, tente novamente mais tarde.")
        }
      }
  }

  async function createAccess({email, password}){

    try {
      const {data} = await api.post("/access", {email, password});
    
      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      setUser(data.user);

      localStorage.setItem("@foodexplorer:user", JSON.stringify(data.user));
      localStorage.setItem("@foodexplorer:token", data.token);
    } catch (error) {
      if (error.message) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível realizar o login. Por favor, tente novamente mais tarde.")
      }
    }
    
  }

  async function removeAccess() {
    
    setUser(undefined);
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");

  }

  return {user, createUser, createAccess, removeAccess}
}