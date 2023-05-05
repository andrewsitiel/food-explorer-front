import FoodExplorerIcon from "../../assets/Polygon.svg";
import { Container, Menu, MenuButton } from "./styles";
import { IoReceiptOutline } from "react-icons/io5"
import { CiSearch } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openAndCloseMenu() {
    isMenuOpen == false ? setIsMenuOpen(true) : setIsMenuOpen(false);
  }

  return (
    <Container>
      <div>
        <img src={FoodExplorerIcon} alt="A blue polygon" />
        <h1>
          Food Explorer
        </h1>
      </div>

      <Menu isMenuOpen={isMenuOpen}>
        <a>Meus Favoritos</a>

        <Input Placeholder="Busque pelas opções de pratos" Type="text" Icon={<CiSearch />} />

        <Button title="Meus pedidos" orders="0" Icon={IoReceiptOutline} />

        <button> <RxExit /> </button>
      </Menu>

      <MenuButton onClick={openAndCloseMenu} isMenuOpen={isMenuOpen}>
        <span />
        <span />
      </MenuButton>
    </Container>
  )
}