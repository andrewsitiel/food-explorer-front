import { Container } from "./styles.js";

export function Button({ title, Icon, orders, ...rest }) {

  const content = orders ? `${title} (${orders})` : title;

  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {content}
    </Container>
  )
}