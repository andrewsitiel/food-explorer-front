import { useState } from "react";

export function OrdersServices() {
  const [order, setOrder] = useState([]);

  function addItemToOrder(itemInfos, itemAmount) {
    const newOrder = {
      id: itemInfos.id,
      image: itemInfos.image,
      name: itemInfos.name,
      price: itemInfos.price,
      amount: itemAmount
    }

    setOrder(prevState => [...prevState, newOrder]);
  }

  function updatedAmount(itemID, newAmount) {
    const updatedItem = order.find(item => item.id === itemID);
    updatedItem.amount = newAmount;

    const newOrder = order.filter(item => !(item.id === itemID))

    setOrder([...newOrder, updatedItem]);
  }

  function removeItem(itemID) {
    const filteredOrder = order.filter(item => !(item.id === itemID));

    setOrder(filteredOrder);
  }

  return { order, addItemToOrder, updatedAmount, removeItem }
}