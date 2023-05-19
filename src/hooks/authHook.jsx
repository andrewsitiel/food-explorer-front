import { createContext, useContext } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={"Teste"}
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