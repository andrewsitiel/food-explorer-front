import { formatPrice } from "./formatPrice";

export function totalAmount(Items) {
  let totalAmount = 0;

  for (let item of Items) {
    let price = item.price;

    if (item.amount > 1) {
      price = price * item.amount;
    }

    totalAmount = totalAmount + price;
  }

  return formatPrice(totalAmount)

}