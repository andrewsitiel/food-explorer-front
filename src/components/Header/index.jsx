import FoodExplorerIcon from "../../assets/Polygon.svg";
import { Container, Menu, MenuButton, Anchor } from "./styles";
import { IoReceiptOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  function openAndCloseMenu() {
    isMenuOpen == false ? setIsMenuOpen(true) : setIsMenuOpen(false);
  }

  return (
    <Container>
      <div>
        <img src={FoodExplorerIcon} alt="A blue polygon" />
        <Anchor to={"/"}>
          Food Explorer
        </Anchor>
      </div>

      <Menu isMenuOpen={isMenuOpen}>
        <a>Meus Favoritos</a>

        <Input Placeholder="Busque pelas opções de pratos" Type="text" Icon={<CiSearch />} />

        <Button title="Meus pedidos" orders="0" Icon={IoReceiptOutline} onClick={() => { navigate("/my-order") }} />

        <button> <RxExit /> </button>
      </Menu>

      <MenuButton onClick={openAndCloseMenu} isMenuOpen={isMenuOpen}>
        <span />
        <span />
      </MenuButton>
    </Container>
  )
}