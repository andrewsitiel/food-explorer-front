import { formatPrice } from "./formatPrice";

export function totalAmount(Items) {
  let totalAmount = 0;

  for (let item of Items) {
    totalAmount = totalAmount + item.price;
  }

  return formatPrice(totalAmount)

}