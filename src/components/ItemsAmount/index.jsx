import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { Container } from "./styles";

export function ItemsAmount({ HandleDishAmount }) {
  const { dishAmount, setDishAmount } = HandleDishAmount;

  function reduceItemsAmount() {
    if (dishAmount > 1) {
      setDishAmount(dishAmount - 1);
    } else {
      setDishAmount(1);
    }
  }

  function AddItemsAmount() {
    setDishAmount(dishAmount + 1);
  }

  return (
    <Container>

      <button onClick={() => reduceItemsAmount()}>
        <AiOutlineMinus />
      </button>

      <span>{String(dishAmount).padStart(2, "0")}</span>

      <button onClick={() => AddItemsAmount()}>
        <AiOutlinePlus />
      </button>

    </Container>
  )
}