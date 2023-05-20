import { createContext, useContext } from "react";
import { AuthServices } from "./authHook";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const { createUser } = AuthServices();

  return (
    <AuthContext.Provider
      value={{
        createUser
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