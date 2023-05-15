import { OrderStatus } from "../../components/OrderStatus";
import { Container } from "./styles";

export function VerticalTable() {
  return (
    <Container>
      <tbody>
        <tr>
          <th>Status</th>
          <td><OrderStatus /></td>
        </tr>
        <tr>
          <th>Código</th>
          <td>000004</td>

        </tr>
        <tr>
          <th>Detalhamento</th>
          <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>

        </tr>
        <tr>
          <th>Data e Hora</th>
          <td>20/05 às 18h00</td>

        </tr>
      </tbody>
    </Container>
  )
}