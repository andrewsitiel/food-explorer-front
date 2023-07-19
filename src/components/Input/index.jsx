import { Container } from "./styles.js";

export function Input({ Title, Placeholder, Type, Icon, ...rest }) {
  return (
    <Container Title={Title}>
      <label htmlFor={Title}> {Title && Title} </label>

      <div>
        {Icon && Icon}
        <input
          id={Title}
          placeholder={Placeholder}
          type={Type}
          {...rest}
        />
      </div>

    </Container>
  )
}