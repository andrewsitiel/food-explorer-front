import { useState } from "react";
import { Button } from "../Button";
import { ItemsAmount } from "../ItemsAmount";
import { HiOutlineHeart } from "react-icons/hi";
import { Container, Heart, Anchor } from "./styles";
import { formatPrice } from "../../utils/formatPrice";

import { api } from "../../services/api";

export function CardItem({ item }) {
  const [HeartIsFilled, setHeartIsFilled] = useState(false);

  function handleClickOnHeart() {
    HeartIsFilled ? setHeartIsFilled(false) : setHeartIsFilled(true);
  }

  return (
    <Container>
      <Heart
        onClick={() => handleClickOnHeart()}
        IsFilled={HeartIsFilled}
      >
        {<HiOutlineHeart />}
      </Heart>

      <img src={`${api.defaults.baseURL}/files/${item.image}`} alt={`Foto de um(a) ${item.name}`} />

      <Anchor to={`/details/${item.id}`}>{item.name + " >"} </Anchor>
      <p>
        {item.description}
      </p>
      <span>
        {formatPrice(item.price)}
      </span>

      <div>
        <ItemsAmount /><Button title="Incluir" />
      </div>
    </Container>
  )
}