import { Container } from "./styles.js";

export function Input({ Title, Placeholder, Type, Icon, ...rest }) {
  return (
    <Container>
      <h3>{Title ?? Title}</h3>

      <div>
        {Icon ?? Icon}
        <input placeholder={Placeholder} type={Type} {...rest} />
      </div>

    </Container>

  )
}