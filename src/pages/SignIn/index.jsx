import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Header, Main, Anchor } from "./styles";
import FoodExplorerIcon from "../../assets/Polygon.svg";

export function SignIn() {
  return (
    <Container>
      <Header>
        <img src={FoodExplorerIcon} alt="A blue polygon" />
        <h1>
          Food Explorer
        </h1>
      </Header>

      <Main>
        <h2>
          Faça Login
        </h2>

        <Input Title="Email" Placeholder="Exemplo: exemplo@exemplo.com" Type="email" required />
        <Input Title="Senha" Placeholder="Mínimo de 6 dígitos" Type="password" minlenght="6" required />

        <Button title="Entrar" />

        <Anchor to={"/register"}>Criar conta</Anchor>
      </Main>
    </Container>
  )
}