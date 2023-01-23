import { Container } from "./styles.js";

export function Input({ Title, Placeholder, Type, ...rest }) {
  return (
    <Container>
      <h3>{Title}</h3>

      <div>
        <input placeholder={Placeholder} type={Type} {...rest} />
      </div>

    </Container>

  )
}