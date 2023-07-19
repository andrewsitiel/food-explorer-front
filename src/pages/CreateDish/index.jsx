import { IngredientsInput } from "../../components/IngredientsInput";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Container, Main } from "./styles.js";
import { FiUpload } from "react-icons/fi";
import { api } from "../../services/api";
import { useState } from "react";

export function CreateDish() {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
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

    if (!image || !name || !price || !category || !description || !ingredients) {
      alert("Por favor, preencha todos os campos.")
      return
    }

    dish.append("image", image);
    dish.append("name", name);
    dish.append("price", price);
    dish.append("category", category);
    dish.append("description", description);
    dish.append("ingredients", ingredients);

    try {

      await api.post("/dishes", dishImage);

      alert("Prato criado com sucesso.");
    } catch (error) {
      if (error.message) {
        alert(error.message)
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
        <a>Voltar</a>

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

        <Input Title="Nome" Placeholder="Ex.: Salada Ceasar" onChange={(e) => { setName(e.target.value) }} />

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

        <Input Title="Preço" Placeholder="Ex.: R$ 30,00" onChange={(e) => { setPrice(e.target.value) }} />
        <Input Title="Categoria" Placeholder="A qual categoria pertence o prato" onChange={(e) => { setCategory(e.target.value) }} />

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