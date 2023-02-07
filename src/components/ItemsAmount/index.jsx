import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { Container } from "./styles";
import { useState } from "react";

export function ItemsAmount() {
  const [dishAmount, setDishAmount] = useState(1)

  return (
    <Container>

      <button onClick={() => setDishAmount(dishAmount - 1)}>
        <AiOutlineMinus />
      </button>

      <span>{String(dishAmount).padStart(2, "0")}</span>

      <button onClick={() => setDishAmount(dishAmount + 1)}>
        <AiOutlinePlus />
      </button>

    </Container>
  )
}