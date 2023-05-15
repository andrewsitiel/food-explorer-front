import { HorizontalTable } from "../../components/HorizontalTable";
import { VerticalTable } from "../../components/VerticalTable";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useState, useEffect } from "react";

import { Container, Main } from "./styles.js";

export function Orders() {
  const [viewPort, setViewPort] = useState(window.innerWidth);

  function updateViewPortValue() {
    setViewPort(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateViewPortValue);
    removeEventListener("resize", window)
  }, [])

  const table = viewPort > 600 ? <HorizontalTable /> : <VerticalTable />;

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