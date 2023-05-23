import { createContext, useContext } from "react";
import { AuthServices } from "./authHook";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const { user, createUser, createAccess, removeAccess } = AuthServices();

  return (
    <AuthContext.Provider
      value={{
        user,
        createUser,
        createAccess,
        removeAccess
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const contextData = useContext(AuthContext);

  return contextData
}

export {
  AuthProvider,
  useAuth
}