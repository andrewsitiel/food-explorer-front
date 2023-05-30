import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";
import Background from "../../assets/Background.png";
import { api } from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";


export function Home() {
  const [dishes, setDishes] = useState();
  const [drinks, setDrinks] = useState();
  const [desserts, setDessert] = useState();

  async function getData() {
    try {

      const { data } = await api.get("/dishes");

      return data

    } catch (error) {
      if (error.message) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível carregar os pratos disponíveis.")
      }
    }

  }

  async function filterDishes(data) {

    setDishes(data.filter((item) => item.category === "dish"));
    setDrinks(data.filter((item) => item.category === "drink"));
    setDessert(data.filter((item) => item.category === "dessert"));

  }

  async function handleFetchData() {
    const data = await getData();

    filterDishes(data)
  }

  useEffect(() => {
    handleFetchData()
  }, [])

  return (
    <Container>
      <Header />
      <main>
        <div>
          <img src={Background} alt="Fruits falling" />

          <div>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        {dishes &&
          <section>
            <h4>Pratos</h4>
            <Slider
              Items={dishes}
            />
          </section>
        }

        {desserts &&
          <section>
            <h4>Sobremesas</h4>
            <Slider
              Items={desserts}
            />
          </section>
        }

        {drinks &&
          <section>
            <h4>Bebidas</h4>
            <Slider
              Items={drinks}
            />
          </section>
        }
      </main>
      <Footer />
    </ Container>
  )
}