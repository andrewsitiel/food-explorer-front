import Background from "../../assets/Background.png";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";
import { api } from "../../services/api";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/authHook";
import { Button } from "../../components/Button";
import { filterDishes } from "../../utils/filterDishes";

export function Home() {
  const [dishes, setDishes] = useState();
  const [drinks, setDrinks] = useState();
  const [desserts, setDesserts] = useState();
  const [allDishes, setAllDishes] = useState();
  const [isFavoritesFilterActive, setIsFavoritesFilterActive] = useState(true);
  const { user } = useAuth();

  function handleFilter(e) {
    const searchWord = e.target.value;

    if (!searchWord) {
      filterCategories(allDishes);
      return
    }

    filterCategories(filterDishes(searchWord, allDishes));
  }

  function handleFavorites() {
    isFavoritesFilterActive ? setIsFavoritesFilterActive(false) : setIsFavoritesFilterActive(true);

    setFilteredDishes();
  }

  async function setFilteredDishes() {
    if (user.favorites_dishes_id.length == 0) {
      alert("Você não tem favoritos");
      return
    }

    if (isFavoritesFilterActive) {
      const { data } = await api.get("/user");

      filterCategories(data.userFavorites);

      return
    } else {
      filterCategories(allDishes)
    }
  }

  async function filterCategories(data) {

    setDishes(data.filter((item) => item.category === "dish"));
    setDrinks(data.filter((item) => item.category === "drink"));
    setDesserts(data.filter((item) => item.category === "dessert"));

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
        FilterFavorites={handleFavorites}
        IsFavoritesFilterActive={isFavoritesFilterActive}
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