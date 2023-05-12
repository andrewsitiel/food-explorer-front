import { Payment } from "../../components/Payment";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Image from "../../assets/Mask group.png";
import { Container, ListItem } from "./styles";

export function MyOrder() {


  const Items = [
    {
      amount: 3,
      name: "Praprioka",
      price: 3.0
    },
    {
      amount: 3,
      name: "Praprioka",
      price: 3.5
    },
    {
      amount: 3,
      name: "Praprioka",
      price: 3.0
    },
    {
      amount: 3,
      name: "Praprioka",
      price: 3.0
    },
    {
      amount: 3,
      name: "Praprioka",
      price: 3.0
    },
  ];

  let totalAmount = 0;

  Items.forEach((item) => {
    totalAmount = totalAmount + item.price;
  });

  totalAmount = String(totalAmount).split(".")

  return (
    <Container

    >
      <Header></Header>
      <main>
        <section>
          <h3>Meu Pedido</h3>
          <ul>

            {Items.map((item, index) => {

              item.price = String(item.price).split(".");

              return (
                <ListItem key={index}>
                  <img src={Image} alt={`Foto de um ${item.name}`} />
                  <div>

                    <div>
                      <h4>{item.amount}{" X  "} {item.name}</h4>
                      <span>
                        {"R$ "}
                        {item.price[0].padStart(2, "0")}
                        {","}
                        {item.price[1] && item.price[1].padEnd(2, "0") || "00"}
                      </span>
                    </div>

                    <button>Excluir</button>
                  </div>
                </ListItem>
              )
            }
            )}

          </ul>

          <h4>
            {"Total do pedido: R$ "}
            {totalAmount[0].padStart(2, "0")}
            {","}
            {totalAmount[1] ? totalAmount[1].padEnd(2, "0") : "00"}
          </h4>
        </section>

        <section>
          <h3>Pagamento</h3>

          <Payment orderStatus={"Entregue"} />
        </section>
      </main>
      <Footer></Footer>
    </Container>
  )
}