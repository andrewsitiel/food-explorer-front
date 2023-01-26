import { Container } from "./styles.js";

export function Button({ title, orders }) {
  return (
    <Container>
      {orders ? `${title} (${orders})` : title}
    </Container>
  )
}