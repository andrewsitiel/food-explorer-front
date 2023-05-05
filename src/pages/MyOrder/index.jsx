import { HiOutlineCreditCard } from "react-icons/hi";
import { IoReceiptOutline } from "react-icons/io5"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, ListItem } from "./styles";
import { Input } from "../../components/Input";
import { useState } from "react";

import Image from "../../assets/Mask group.png";
import QR from "../../assets/QR.png";

export function MyOrder() {
  const [isPixButtonSelected, setIsPixButtonSelected] = useState(true);
  const [isCreditButtonSelected, setIsCreditButtonSelected] = useState(false);

  function changeSelectedButton(Pix, Credit) {
    setIsPixButtonSelected(Pix);
    setIsCreditButtonSelected(Credit);
  }

  const CreditScreen = () => {
    return (
      <div>
        <Input Title="Número do Cartão" Placeholder="0000 0000 0000 0000" />

        <Input Title="Validade" Placeholder="04/25" />
        <Input Title="CVC" Placeholder="04/25" />

        <Button title="Finalizar Pagamento" Icon={IoReceiptOutline} />
      </div>
    )
  }

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
      isPixButtonSelected={isPixButtonSelected}
      isCreditButtonSelected={isCreditButtonSelected}
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

          <div>
            <button onClick={() => changeSelectedButton(true, false)}>
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs />
                <g fill="#FFFF" fillRule="evenodd">
                  <path d="M393.072 391.897c-20.082 0-38.969-7.81-53.176-22.02l-77.069-77.067c-5.375-5.375-14.773-5.395-20.17 0l-76.784 76.786c-14.209 14.207-33.095 22.019-53.179 22.019h-9.247l97.521 97.52c30.375 30.375 79.614 30.375 109.988 0l97.239-97.238h-15.123zm-105.049 74.327c-8.55 8.53-19.93 13.25-32.05 13.25h-.02c-12.12 0-23.522-4.721-32.05-13.25l-56.855-56.855c7.875-4.613 15.165-10.248 21.758-16.84l63.948-63.948 64.23 64.23c7.637 7.66 16.188 14.013 25.478 18.952l-54.439 54.46zM310.958 22.78c-30.374-30.374-79.613-30.374-109.988 0l-97.52 97.52h9.247c20.082 0 38.97 7.834 53.178 22.02l76.784 76.785c5.57 5.592 14.622 5.57 20.17 0l77.069-77.068c14.207-14.187 33.094-22.02 53.176-22.02h15.123l-97.239-97.237zm6.028 96.346l-64.23 64.23-63.97-63.97c-6.593-6.592-13.86-12.206-21.736-16.818l56.853-56.877c17.69-17.645 46.476-17.668 64.121 0l54.44 54.461c-9.292 4.961-17.842 11.315-25.479 18.974h.001z" />
                  <path d="M489.149 200.97l-58.379-58.377h-37.706c-13.838 0-27.394 5.635-37.185 15.426l-77.068 77.069c-7.202 7.18-16.623 10.77-26.067 10.77-9.443 0-18.885-3.59-26.066-10.77l-76.785-76.785c-9.792-9.814-23.346-15.427-37.207-15.427h-31.81L22.78 200.97c-30.374 30.375-30.374 79.614 0 109.988l58.095 58.074 31.81.021c13.86 0 27.416-5.635 37.208-15.426l76.784-76.764c13.925-13.947 38.208-13.924 52.133-.02l77.068 77.066c9.791 9.792 23.346 15.405 37.185 15.405h37.706l58.379-58.356c30.374-30.374 30.374-79.613 0-109.988zm-362.19 129.724c-3.763 3.786-8.942 5.917-14.273 5.917H94.302l-48.59-48.564c-17.689-17.69-17.689-46.476 0-64.143L94.3 175.296h18.385c5.331 0 10.51 2.154 14.295 5.918l74.74 74.74-74.761 74.74zm339.257-42.647l-48.848 48.87h-24.305c-5.309 0-10.508-2.155-14.251-5.92l-75.023-75.043 75.023-75.023c3.743-3.764 8.942-5.918 14.252-5.918h24.304l48.847 48.891c8.573 8.551 13.273 19.93 13.273 32.05 0 12.141-4.7 23.52-13.273 32.093z" />
                </g>
              </svg>
              Pix
            </button>
            <button onClick={() => changeSelectedButton(false, true)}>
              <HiOutlineCreditCard />
              Crédito
            </button>

            {
              isPixButtonSelected ? <img src={QR} alt="QR Code" /> : <CreditScreen />
            }

          </div>
        </section>
      </main>
      <Footer></Footer>
    </Container>
  )
}