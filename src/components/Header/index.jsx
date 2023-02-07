import FoodExplorerIcon from "../../assets/Polygon.svg";
import { Container, Menu, MenuButton } from "./styles";
import { CiSearch } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function openAndCloseMenu() {
    isOpen == false ? setIsOpen(true) : setIsOpen(false);
  }

  return (
    <Container>
      <div>
        <img src={FoodExplorerIcon} alt="A blue polygon" />
        <h1>
          Food Explorer
        </h1>
      </div>

      <Menu isOpen={isOpen}>
        <a>Meus Favoritos</a>

        <Input Placeholder="Busque pelas opções de pratos" Type="text" Icon={<CiSearch />} />

        <Button title="Meus pedidos" orders="0" />

        <button> <RxExit /> </button>
      </Menu>

      <MenuButton onClick={openAndCloseMenu} isOpen={isOpen}>
        <span />
        <span />
      </MenuButton>
    </Container>
  )
}