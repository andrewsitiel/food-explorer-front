import FoodExplorerIcon from "../../assets/Polygon_Gray.svg";
import { Container, Anchor } from "./styles.js";

export function Footer() {
  return (
    <Container>
      <Anchor to={"/"}>
        <img src={FoodExplorerIcon} alt="A blue polygon" />
        <h1>
          Food Explorer
        </h1>
      </Anchor>

      <p>
        © 2022 - Todos os direitos reservados.
      </p>
    </Container>
  )
}