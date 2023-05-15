import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Header, Main, Anchor } from "./styles";
import FoodExplorerIcon from "../../assets/Polygon.svg";


export function SignUp() {
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
          Crie sua conta
        </h2>

        <Input Title="Seu nome" Placeholder="Digite seu nome" Type="name" required />
        <Input Title="E-mail" Placeholder="Exemplo: exemplo@exemplo.com" Type="email" required />
        <Input Title="Senha" Placeholder="Mínimo de 6 dígitos" Type="password" minlenght="6" required />

        <Button title="Criar Conta" />

        <Anchor to={"/"}>Já tenho uma conta</Anchor>
      </Main>
    </Container>
  )
}