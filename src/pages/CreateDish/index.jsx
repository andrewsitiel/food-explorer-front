import { IngredientsInput } from "../../components/IngredientsInput";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Container, Main } from "./styles.js";
import { FiUpload } from "react-icons/fi";
import { useState } from "react";

export function CreateDish() {
  const [ingredients, setIngredients] = useState([]);
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
            <label htmlFor="dish-image">Selecione uma Imagem</label>
            <input type="file" id="dish-image" />
          </div>
        </div>

        <Input Title="Nome" Placeholder="Ex.: Salada Ceasar" />

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

        <Input Title="Preço" Placeholder="Ex.: R$ 30,00" />
        <Input Title="Categoria" Placeholder="A qual categoria pertence o prato" />

        <div>
          <label htmlFor="description">Descrição</label>
          <textarea name="Descrição" id="description" cols="30" rows="10" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></textarea>
        </div>

        <button>Adicionar pedido</button>
      </Main>
      <Footer />

    </ Container>
  )
}