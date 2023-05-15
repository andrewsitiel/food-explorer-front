import { OrderStatus } from "../../components/OrderStatus";
import { Container } from "./styles";

export function HorizontalTable() {
  return (
    <Container>
      <thead>
        <tr>
          <th>Status</th>
          <th>Código</th>
          <th>Detalhamento</th>
          <th>Data e Hora</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <OrderStatus />
          </td>
          <td>000004</td>
          <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
          <td>20/05 às 18h00</td>
        </tr>
      </tbody>
    </Container>
  )
};