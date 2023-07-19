import { formatPrice } from "../../utils/formatPrice";
import { useOrder } from "../../hooks/orderHook";
import { Heart } from "../../components/Heart";
import { Container, Anchor } from "./styles";
import { ItemsAmount } from "../ItemsAmount";
import { api } from "../../services/api";
import { Button } from "../Button";
import { useState } from "react";

export function CardItem({ item, delay }) {

  const [dishAmount, setDishAmount] = useState(1);
  const { order, addItemToOrder, updatedAmount } = useOrder();

  function handleAddItem() {
    const itemAdded = order.find(newItem => newItem.id === item.id);

    if (itemAdded) {
      if (itemAdded.amount === dishAmount) {
        alert("Você já adicionou este item")
        return
      } else {
        updatedAmount(itemAdded.id, dishAmount)
        return
      }
    }

    addItemToOrder(item, dishAmount)
  }

  return (
    <Container delay={delay}>
      <Heart DishID={item.id} />

      <img src={`${api.defaults.baseURL}/files/${item.image}`} alt={`Foto de um(a) ${item.name}`} />

      <Anchor to={`/details/${item.id}`}>{item.name + " >"} </Anchor>
      <p>
        {item.description}
      </p>
      <span>
        {formatPrice(item.price)}
      </span>

      <div>
        <ItemsAmount HandleDishAmount={{ dishAmount, setDishAmount }} />
        <Button title="Incluir" onClick={() => { handleAddItem() }} />
      </div>
    </Container>
  )
}