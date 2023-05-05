import { OrderStatus } from "../../components/OrderStatus";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useState, useEffect } from "react";

import { Container, Main, Table } from "./styles.js";

export function Orders() {
  const [viewPort, setViewPort] = useState(window.innerWidth);

  function updateViewPortValue() {
    setViewPort(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateViewPortValue);
    removeEventListener("resize", window)
  }, [])

  const horizontalTable = () => {
    return (
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
    )
  };

  const verticalTable = () => {
    return (
      <Table>
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
      </Table>
    )
  };

  const table = viewPort > 600 ? horizontalTable() : verticalTable();

  return (
    <Container>
      <Header />
      <Main>
        <h2>Pedidos</h2>
        {table}
      </Main>
      <Footer />
    </Container >
  )
}