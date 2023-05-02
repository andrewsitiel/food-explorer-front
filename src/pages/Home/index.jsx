import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";
import Background from "../../assets/Background.png";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div>
          <img src={Background} alt="Fruits falling" />

          <div>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        <section>
          <h4>Pratos</h4>
          <Slider
            Items={[
              {
                name: "Perino",
                description: "Pepino, Cebola e Tomate",
                price: String(10.5).split("."),
              },
              {
                name: "Sopa de Legumes",
                description: "Muitos legumes",
                price: String(5.0).split(".")
              },
              {
                name: "Coxinha",
                description: "Frango, Catupiry",
                price: String(3.0).split(".")
              },
              {
                name: "Coxinha",
                description: "Frango, Catupiry",
                price: String(3.0).split(".")
              },
              {
                name: "Coxinha",
                description: "Frango, Catupiry",
                price: String(3.0).split(".")
              },
              {
                name: "Coxinha",
                description: "Frango, Catupiry",
                price: String(3.0).split(".")
              },
              {
                name: "Coxinha",
                description: "Frango, Catupiry",
                price: String(3.0).split(".")
              },
              {
                name: "Coxinha",
                description: "Frango, Catupiry",
                price: String(3.0).split(".")
              }
            ]}
          />
        </section>

        <section>
          <h4>Sobremesas</h4>
          <Slider
            Items={[
              {
                name: "Prugna Pie >",
                description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
                price: String(32.97).split(".")
              },
              {
                name: "Prugna Pie >",
                description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
                price: String(32.97).split(".")
              },
              {
                name: "Prugna Pie >",
                description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
                price: String(32.97).split(".")
              },
              {
                name: "Prugna Pie >",
                description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
                price: String(32.97).split(".")
              },
              {
                name: "Prugna Pie >",
                description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
                price: String(32.97).split(".")
              },
              {
                name: "Prugna Pie >",
                description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
                price: String(32.97).split(".")
              }
            ]}
          />
        </section>

        <section>
          <h4>Bebidas</h4>
          <Slider
            Items={[
              {
                name: "Espresso",
                description: "Café cremoso feito na temperatura e pressões perfeitas.",
                price: String(49.97).split("."),
              },
              {
                name: "Espresso",
                description: "Café cremoso feito na temperatura e pressões perfeitas.",
                price: String(49.97).split("."),
              },
              {
                name: "Espresso",
                description: "Café cremoso feito na temperatura e pressões perfeitas.",
                price: String(49.97).split("."),
              },
              {
                name: "Espresso",
                description: "Café cremoso feito na temperatura e pressões perfeitas.",
                price: String(49.97).split("."),
              },
              {
                name: "Espresso",
                description: "Café cremoso feito na temperatura e pressões perfeitas.",
                price: String(49.97).split("."),
              }
            ]}
          />
        </section>
      </main>
      <Footer />
    </ Container>
  )
}