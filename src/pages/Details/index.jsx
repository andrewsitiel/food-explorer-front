import { Container, Main, DESCRIPTION, Anchor } from "./styles";
import { ItemsAmount } from "../../components/ItemsAmount";
import { Ingredients } from "../../components/Ingredients";
import { IoReceiptOutline } from "react-icons/io5"
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import DishImage from "../../assets/Mask group.png";

export function Details() {
  return (
    <Container>
      <Header />

      <Main>
        <Anchor to={"/"}>Voltar</Anchor>

        <img src={DishImage} alt="Dish's image" />

        <DESCRIPTION>

          <h3>Salada Ravanello</h3>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <Ingredients data={
            [
              { title: "tomate" },
              { title: "alface" },
              { title: "pão" },
              { title: "cebola" },
              { title: "limão" },
            ]
          }
          />

          <div>
            <span>R$00,00</span>

            <ItemsAmount />

            <Button title="Incluir" Icon={IoReceiptOutline} />
          </div>

        </DESCRIPTION>

      </Main>

      <Footer />
    </ Container>
  )
} 