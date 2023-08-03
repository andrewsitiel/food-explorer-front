import { IngredientsInput } from "../../components/IngredientsInput";
import { Container, Main, Anchor, Select } from "./styles.js";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { FiUpload } from "react-icons/fi";
import { api } from "../../services/api";
import { useState } from "react";

export function CreateDish() {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("Dish");
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [inputValue, setInputValue] = useState("");

  function handleAddIngredient() {
    if (inputValue.length > 0) {
      setIngredients(prevState => [...prevState, inputValue])
      setInputValue("")
    }
  }

  function handleDeleteIngredient(item) {
    const filteredIngredients = ingredients.filter(ingredient => !(ingredient === item));

    setIngredients(filteredIngredients)
  }

  async function handleNewDish() {
    const dish = new FormData();

    if (typeof parseInt(price) != "number") {
      alert("Por favor, insira apenas valores válidos.");
      return
    }

    if (!image || !name || !price || !category || !description || !ingredients) {
      alert("Por favor, preencha todos os campos.")
      return
    }
    const dishInfos = {
      name: name,
      price: price,
      category: category,
      description: description,
      ingredients: ingredients
    }

    dish.append("image", image);
    dish.append("infos", JSON.stringify(dishInfos));

    try {

      await api.post("/dishes", dish);

      alert("Prato criado com sucesso.");
    } catch (error) {
      if (error.message) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível criar o prato. Por favor, tente novamente mais tarde.")
      }
    }

  }

  function handleDishImage(event) {
    const file = event.target.files[0];

    setImage(file)
  }

  return (
    <Container>
      <Header />
      <Main >
        <Anchor to={"/"}>Voltar</Anchor>

        <h3>Adicionar Prato</h3>

        <div>
          <h4>Imagem do Prato</h4>

          <div>
            <FiUpload />
            <label htmlFor="dish-image">{image ? "Pronto!" : "Selecione uma Imagem"}</label>
            <input
              type="file"
              id="dish-image"
              accept="image/*"
              onChange={handleDishImage}
            />
          </div>
        </div>

        <Input
          Title="Nome"
          Type="text"
          Placeholder="Ex.: Salada Ceasar"
          onChange={(e) => { setName(e.target.value) }}
        />

        <div>
          <h4>Ingredientes</h4>

          <div>
            {
              ingredients && ingredients.map((ingredient, index) => {
                return (
                  <IngredientsInput
                    key={index}
                    Title={ingredient}
                    onClick={() => { handleDeleteIngredient(ingredient) }}
                  />
                )
              })
            }

            <IngredientsInput
              Title={inputValue}
              onChange={e => { setInputValue(e.target.value) }}
              onClick={() => { handleAddIngredient() }}
              IsNew
            />

          </div>
        </div>

        <Input
          Title="Preço"
          Type="number"
          Placeholder="Ex.: 30,00"
          min={0}
          step={.01}
          lang="pt-BR"
          onChange={(e) => { setPrice(e.target.value) }}
        />

        <Select>
          <label htmlFor="Categoria">Categoria</label>
          <div>
            <select
              name="Categoria"
              placeholder="A qual categoria pertence o prato"
              onChange={(e) => { setCategory(e.target.value) }}
            >
              <option value="Dish">Dish</option>
              <option value="Drink">Drink</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>
        </Select>

        <div>
          <label htmlFor="description">Descrição</label>
          <textarea
            name="Descrição"
            id="description"
            cols="30"
            rows="10"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => { setDescription(e.target.value) }}
          ></textarea>
        </div>

        <button onClick={handleNewDish}>Adicionar pedido</button>
      </Main>
      <Footer />

    </ Container>
  )
}