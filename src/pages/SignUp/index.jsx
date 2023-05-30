import { Container, Header, Main, Anchor } from "./styles";
import FoodExplorerIcon from "../../assets/Polygon.svg";
import { useAuth } from "../../hooks/authHookProvider";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { useState } from "react";


export function SignUp() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { createUser } = useAuth();
  const navigate = useNavigate();


  async function handleSubmit() {

    if (!name || !email || !password) {
      alert("Por favor, preencha todos os campos.")
      return
    }

    const { data } = await createUser({ name, email, password })

    alert(data.message)
    navigate("/")

    return

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
          Crie sua conta
        </h2>

        <Input
          Title="Seu nome"
          Placeholder="Digite seu nome" Type="text"
          onChange={(e) => { setName(e.target.value) }}
        />

        <Input
          Title="E-mail"
          Placeholder="Exemplo: exemplo@exemplo.com"
          Type="email"
          onChange={(e) => { setEmail(e.target.value) }}
        />

        <Input
          Title="Senha"
          Placeholder="Mínimo de 6 dígitos"
          Type="password"
          minlenght="6"
          onChange={(e) => { setPassword(e.target.value) }}
        />

        <Button title="Criar Conta" onClick={handleSubmit} />

        <Anchor to={"/"}>Já tenho uma conta</Anchor>
      </Main>
    </Container>
  )
}