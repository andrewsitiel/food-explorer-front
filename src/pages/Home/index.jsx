import { filterDishes } from "../../utils/filterDishes";
import Background from "../../assets/Background.png";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [allDishes, setAllDishes] = useState();

  function handleFilter(e) {
    const searchWord = e.target.value;

    if (!searchWord) {
      filterCategories(allDishes);
      return
    }

    filterCategories(filterDishes(searchWord, allDishes));
  }

  async function filterCategories(data) {

    setDishes(data.filter((item) => item.category === "Dish"));
    setDrinks(data.filter((item) => item.category === "Drink"));
    setDesserts(data.filter((item) => item.category === "Dessert"));

  }

  async function getData() {
    try {

      const { data } = await api.get("/dishes");

      return data
    } catch (error) {
      if (error.message) {
        alert(error.message)
      } else {
        alert("Não foi possível carregar os pratos disponíveis.")
      }
    }

  }

  async function handleFetchData() {
    const data = await getData();

    setAllDishes(data);

    filterCategories(data);
  }

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <Container >
      <Header
        filterDishes={handleFilter}
      />
      <main>
        <div>
          <img src={Background} alt="Fruits falling" />

          <div>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        {dishes.length > 0 &&
          <section>
            <h4>Pratos</h4>
            <Slider
              Items={dishes}
            />
          </section>
        }

        {desserts.length > 0 &&
          <section>
            <h4>Sobremesas</h4>
            <Slider
              Items={desserts}
            />
          </section>
        }

        {drinks.length > 0 &&
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