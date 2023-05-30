import { Container } from "./styles";
import ingredientImage from "../../assets/fruit.png";

export function Ingredients({ Ingredients }) {
  return (
    <Container>
      {
        Ingredients.map((ingredient) => {
          return (
            <div key={ingredient.id}>
              <img src={ingredientImage} alt="Image of a dish ingredient" />
              <h4>{ingredient.name}</h4>
            </div>
          )
        })
      }
    </Container>
  )
}