import { Container } from "./styles";
import ingredientImage from "../../assets/fruit.png";

export function Ingredients({ data }) {
  return (
    <Container>
      {
        data.map((ingredient, index) => {
          return (
            <div key={index}>
              <img src={ingredientImage} alt="Image of a dish ingredient" />
              <h4>{ingredient.title}</h4>
            </div>
          )
        })
      }
    </Container>
  )
}