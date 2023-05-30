import { Container, Main, DESCRIPTION, Anchor } from "./styles";
import { ItemsAmount } from "../../components/ItemsAmount";
import { Ingredients } from "../../components/Ingredients";
import { formatPrice } from "../../utils/formatPrice";
import { IoReceiptOutline } from "react-icons/io5"
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Details() {
  const [dish, setDish] = useState();
  const { id: dishId } = useParams();

  useEffect(() => {
    async function getDish() {
      try {
        const { data } = await api.get(`/dishes/${dishId}`);

        setDish(data.dish)

      } catch (error) {
        if (error.message) {
          alert(error.response.data.message)

        } else {
          alert("Não foi possível carregar os detalhes do prato.")
        }
      }

    }

    getDish();

  }, [])

  return (
    <Container>
      <Header />

      {dish && <Main>
        <Anchor to={"/"}>Voltar</Anchor>

        <img src={`${api.defaults.baseURL}/files/${dish.image}`} alt={`Image of a ${dish.name}`} />

        <DESCRIPTION>

          <h3>{dish.name}</h3>
          <p>
            {dish.description}
          </p>

          <Ingredients Ingredients={dish.ingredients}
          />

          <div>
            <span>{formatPrice(dish.price)}</span>

            <ItemsAmount />

            <Button title="Incluir" Icon={IoReceiptOutline} />
          </div>

        </DESCRIPTION>
      </Main>}

      <Footer />
    </ Container>
  )
} 