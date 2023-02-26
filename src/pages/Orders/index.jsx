import { OrderStatus } from "../../components/OrderStatus";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Container, Main, Table } from "./styles.js";

export function Orders() {
  return (
    <Container>
      <Header />
      <Main>
        <h2>Pedidos</h2>

        <Table>
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
        </Table>

      </Main>
      <Footer />
    </Container >
  )
}