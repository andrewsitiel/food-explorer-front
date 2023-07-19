import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import FoodExplorerIcon from "../../assets/Polygon.svg";
import { useAuth } from "../../hooks/authHook";
import { Container, Header, Main, Anchor } from "./styles";

export function SignIn() {
  const { createAccess } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleLogin() {
    if (!email || !password) {
      alert("Por favor, preencha todos os campos.")
      return
    }

    await createAccess({ email, password });

  }

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

        <Input
          Title="Email"
          Placeholder="Exemplo: exemplo@exemplo.com"
          Type="email"
          required
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <Input
          Title="Senha"
          Placeholder="Mínimo de 6 dígitos"
          Type="password"
          minlenght="6"
          required
          onChange={(e) => { setPassword(e.target.value) }}
        />

        <Button title="Entrar" onClick={handleLogin} />

        <Anchor to={"/register"}>Criar conta</Anchor>
      </Main>
    </Container>
  )
}