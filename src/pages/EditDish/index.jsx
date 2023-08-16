import { IngredientsInput } from "../../components/IngredientsInput";
import { Container, Main, Anchor, Select } from "./styles.js";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { api } from "../../services/api";

export function EditDish() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Dish");
  const [description, setDescription] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();
  const { id: dishId } = useParams();

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

  function handleDishImage(event) {
    const file = event.target.files[0];

    setImage(file)
  }

  async function updateDish() {
    const dish = new FormData();

    if (!image || !name || !price || !category || !description) {
      alert("Por favor, preencha todos os campos.")
      return
    }

    if (ingredients.length === 0) {
      alert("Necessário cadastrar ao menos um ingrediente.")
      return
    }

    const dishInfos = {
      id: dishId,
      name: name,
      price: price,
      category: category,
      description: description,
      ingredients: ingredients
    }

    dish.append("image", image);
    dish.append("infos", JSON.stringify(dishInfos));

    try {

      await api.put("/dishes", dish);

      alert("Prato editado com sucesso.");
      navigate("/")

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível editar este prato.")
      }
    }
  }

  async function handleDeleteDish() {

    try {
      const confirmation = confirm("Tem certeza que deseja excluir este prato?");

      if (confirmation) {
        await api.delete(`/dishes/${dishId}`);

        alert("Prato deletado com sucesso.");
        navigate("/");
      }

      return
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível deletar o prato. Por favor, tente novamente")
      }
    }

  }

  useEffect(() => {
    async function getDish() {
      try {
        const { data: { dish } } = await api.get(`/dishes/${dishId}`);

        setName(dish.name)
        setPrice(dish.price)
        setImage(dish.image)
        setCategory(dish.category)
        setDescription(dish.description)
        setIngredients(dish.ingredients.map(ingredient => ingredient.name));
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível carregar os detalhes do prato.")
        }
      }
    }

    getDish()
  }, [])

  return (
    <Container>
      <Header />
      <Main >
        <Anchor to={"/"}>Voltar</Anchor>

        <h3>Adicionar Prato</h3>

        <div>
          <h4>Imagem do Prato</h4>

          <div>
            <label htmlFor="dish-image"></label>
            <FiUpload />
            <p>{image ? "Pronto!" : "Selecione uma Imagem"}</p>
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
          value={name}
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
          value={price}
          onChange={(e) => { setPrice(e.target.value) }}
        />

        <Select>
          <label htmlFor="Categoria">Categoria</label>
          <div>
            <select
              name="Categoria"
              placeholder="A qual categoria pertence o prato"
              value={category}
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
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
          ></textarea>
        </div>

        <div>
          <button onClick={updateDish}>Adicionar pedido</button>
          <button onClick={handleDeleteDish}>Excluir</button>
        </div>
      </Main>
      <Footer />

    </ Container>
  )
}