import { Container, Menu, MenuButton, Anchor, FavoritesButton } from "./styles";
import { useAuth } from "../../hooks/authHook";
import { useOrder } from "../../hooks/orderHook";
import FoodExplorerIcon from "../../assets/Polygon.svg";
import { IoReceiptOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import { Button } from "../Button";
import { Input } from "../Input";

export function Header({ FilterFavorites, IsFavoritesFilterActive, filterDishes }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState();
  const { removeAccess } = useAuth();
  const { order } = useOrder();

  const navigate = useNavigate();

  function openAndCloseMenu() {
    isMenuOpen == false ? setIsMenuOpen(true) : setIsMenuOpen(false);
  }

  function handleLogOut() {
    navigate("/")
    removeAccess();
  }

  useEffect(() => {

    const { pathname } = window.location;

    pathname === "/" ? setIsHome(true) : setIsHome(false);
  }, [])

  return (
    <Container>
      <div>
        <img src={FoodExplorerIcon} alt="A blue polygon" />
        <Anchor to={"/"}>
          Food Explorer
        </Anchor>
      </div>

      <Menu isMenuOpen={isMenuOpen}>
        <FavoritesButton
          onClick={isHome ? FilterFavorites : undefined}
          IsFavoritesFilterActive={isHome ? IsFavoritesFilterActive : true}
        >
          Meus Favoritos
        </FavoritesButton>

        <Input
          Placeholder="Busque pelas opções de pratos (Nome ou ingrediente)"
          Type="text"
          Icon={<CiSearch />}
          onChange={(e) => { filterDishes(e) }}
        />

        <Button
          title={"Meu pedido"}
          onClick={() => { navigate("/my-order") }}
          orders={order.length > 0 ? order.length : "0"}
          Icon={IoReceiptOutline}
        />

        <button onClick={handleLogOut}> <RxExit /> </button>
      </Menu>

      <MenuButton onClick={openAndCloseMenu} isMenuOpen={isMenuOpen}>
        <span />
        <span />
      </MenuButton>
    </Container>
  )
}