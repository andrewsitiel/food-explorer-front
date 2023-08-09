export function formatPrice(price) {
  const priceArray = String(price).split(".");

  const formattedPrice = `R$ ${priceArray[0].padStart(2, "0")},${priceArray[1] ? priceArray[1].substring(0, 2).padEnd(2, "0") : "00"}`

  return formattedPrice
}