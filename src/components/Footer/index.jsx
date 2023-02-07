import FoodExplorerIcon from "../../assets/Polygon_Gray.svg";
import { Container } from "./styles.js";

export function Footer() {
  return (
    <Container>
      <div>
        <img src={FoodExplorerIcon} alt="A blue polygon" />
        <h1>
          Food Explorer
        </h1>
      </div>

      <p>
        © 2022 - Todos os direitos reservados.
      </p>
    </Container>
  )
}