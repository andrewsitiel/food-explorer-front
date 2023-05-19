import { createContext, useContext } from "react";

const OrderHook = createContext({});

function OrderProvider({ children }) {
  return (
    <OrderHook.Provider value={"Order hook teste"}>
      {children}
    </OrderHook.Provider>
  )
}

function useOrder() {
  const contextData = useContext(OrderHook);

  return contextData
}

export { OrderProvider, useOrder }