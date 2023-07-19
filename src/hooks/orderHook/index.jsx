import { createContext, useContext } from "react";
import { OrdersServices } from "./orderHook";

const OrderHook = createContext({});

function OrderProvider({ children }) {
  const { order, addItemToOrder, updatedAmount, removeItem } = OrdersServices();

  return (
    <OrderHook.Provider
      value={{
        order,
        addItemToOrder,
        updatedAmount,
        removeItem
      }}
    >
      {children}
    </OrderHook.Provider>
  )
}

function useOrder() {
  const contextData = useContext(OrderHook);

  return contextData
}

export { OrderProvider, useOrder }