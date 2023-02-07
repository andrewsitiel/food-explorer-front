import { ItemsAmount } from "../../components/ItemsAmount";
import { Ingredients } from "../../components/Ingredients";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Container, Main } from "./styles";

import DishImage from "../../assets/Mask group.png";

export function Details() {
  return (
    <Container>
      <Header />

      <Main>
        <a>Voltar</a>

        <img src={DishImage} alt="Dish's image" />

        <div>

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

            <Button title="Incluir" />
          </div>

        </div>

      </Main>

      <Footer />
    </ Container>
  )
} 