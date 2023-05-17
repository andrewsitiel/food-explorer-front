import { useState } from "react";
import { Button } from "../Button";
import { ItemsAmount } from "../ItemsAmount";
import { HiOutlineHeart } from "react-icons/hi";
import { Container, Heart } from "./styles";

import DishImage from "../../assets/Mask group.png";

export function CardItem({ item }) {
  const [HeartIsFilled, setHeartIsFilled] = useState(false);

  function handleClickOnHeart() {
    HeartIsFilled ? setHeartIsFilled(false) : setHeartIsFilled(true);
  }

  return (
    <Container to={"/details"}>
      <Heart
        onClick={() => handleClickOnHeart()}
        IsFilled={HeartIsFilled}
      >
        {<HiOutlineHeart />}
      </Heart>

      <img src={DishImage} alt={`Foto de um(a) ${item.name}`} />

      <h4>{item.name + " >"} </h4>
      <p>
        {item.description}
      </p>
      <span>
        {"R$ "}
        {item.price[0].padStart(2, "0")}
        {","}
        {item.price[1] && item.price[1].padEnd(2, "0") || "00"}
      </span>

      <div>
        <ItemsAmount /><Button title="Incluir" />
      </div>

    </Container>
  )
}