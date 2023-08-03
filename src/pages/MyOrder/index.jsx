import { Container, EmptyOrder } from "./styles";
import { Payment } from "../../components/Payment";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useOrder } from "../../hooks/orderHook";
import { totalAmount } from "../../utils/totalAmount";
import { OrderList } from "../../components/OrderList";
import { BsCart3 } from "react-icons/bs";

export function MyOrder() {
  const { order } = useOrder();

  return (
    <Container>
      <Header />

      {order.length > 0 &&
        <main>
          <section>
            <h3>Meu Pedido</h3>

            <OrderList order={order} />

            <h4>
              {`Total do pedido: ${totalAmount(order)}`}
            </h4>

          </section>

          <section>
            <h3>Pagamento</h3>

            <Payment />
          </section>

        </main>
      }

      {order.length === 0 &&
        <EmptyOrder>
          <BsCart3 size={250} />
          <h4>Seu pedido ainda está vazio</h4>
        </EmptyOrder>
      }
      < Footer />
    </Container>
  )
}