import { IoReceiptOutline } from "react-icons/io5";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "./styles";

export function CreditScreen() {
  return (
    <Container>
      <Input Title="Número do Cartão" Placeholder="0000 0000 0000 0000" />

      <Input Title="Validade" Placeholder="04/25" />
      <Input Title="CVC" Placeholder="000" />

      <Button title="Finalizar Pagamento" Icon={IoReceiptOutline} />
    </Container>
  )
}