import { Container } from "./styles";

export function Ingredients({ Ingredients }) {
  return (
    <Container>
      {
        Ingredients.map((ingredient) => {
          return (
            <div key={ingredient.id}>
              <h4>{ingredient.name}</h4>
            </div>
          )
        })
      }
    </Container>
  )
}