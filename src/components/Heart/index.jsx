import { HiOutlineHeart } from "react-icons/hi";
import { useState } from "react";
import { Container } from "./styles";

export function Heart() {
  const [HeartIsFilled, setHeartIsFilled] = useState(false);

  function handleClickOnHeart() {
    HeartIsFilled ? setHeartIsFilled(false) : setHeartIsFilled(true);
  }

  return (
    <Container
      onClick={() => handleClickOnHeart()}
      IsFilled={HeartIsFilled}
    >
      {<HiOutlineHeart />}
    </Container>
  )
}