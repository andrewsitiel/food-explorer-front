import { GiConfirmed, GiKnifeFork } from "react-icons/gi";
import { FiClock } from "react-icons/fi";
import { Container } from "./styles";

export function PaymentMadeScreens(orderStatus) {
  const PaymentMadeScreens = {
    "Pendente": { icon: <FiClock />, description: "Aguardando pagamento no caixa" },
    "Preparando": { icon: <GiConfirmed />, description: "Pagamento aprovado!" },
    "Entregue": { icon: <GiKnifeFork />, description: "Pedido entregue!" }
  }

  return (
    <Container>
      {PaymentMadeScreens[orderStatus].icon}
      <p>{PaymentMadeScreens[orderStatus].description}</p>
    </Container>
  )
}