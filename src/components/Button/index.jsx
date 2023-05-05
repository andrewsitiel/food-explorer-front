import { Container } from "./styles.js";

export function Button({ title, Icon, orders }) {
  console.log(Icon);
  const content = orders ? `${title} (${orders})` : title;

  return (
    <Container>
      {Icon && <Icon />}
      {content}
    </Container>
  )
}