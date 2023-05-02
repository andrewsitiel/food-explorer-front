import { Container, Menu } from "./styles";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export function OrderStatus() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [orderStatus, setOrderStatus] = useState("Pendente");
  const menu = document.querySelector("td menu");
  let current = 0;

  function toggleStatusMenu() {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }

  function handleMenuClose() {
    const menuItems = Array.from(menu.children);

    menuItems.forEach(child => {
      child.setAttribute("tabindex", -1);
    });

    menuItems[0].setAttribute("tabindex", 0);

    toggleStatusMenu();
  }

  function handleInputValue({ target, code: key }) {
    if (key === "Space") {
      handleMenuClose()
      target.click()
    }
  }

  function handleKeyDown(key) {

    const menuItems = Array.from(menu.children);

    if (!(["ArrowUp", "ArrowDown"].includes(key))) return;

    let next;

    menuItems[current].setAttribute("tabindex", -1);

    if (key === "ArrowDown") {
      next = current + 1;

      if (current == menu.children.length - 1) {
        next = 0;
      }
    } else if (key === "ArrowUp") {
      next = current - 1;

      if (current == 0) {
        next = menu.children.length - 1;
      }
    }

    menuItems[next].setAttribute("tabindex", 0);
    menuItems[next].focus();

    current = next;
  }

  return (
    <>
      <Container
        onClick={toggleStatusMenu}
        onFocus={(e) => { toggleStatusMenu() }}
        tabIndex="0"
        aria-label="select input"
      >
        <p>
          {orderStatus}
        </p>

        <IoIosArrowDown />
      </Container>

      <Menu
        isMenuOpen={isMenuOpen}
        tabIndex="-1"
        onKeyDown={(e) => { handleKeyDown(e.code) }}
      >
        <span
          onClick={() => { setOrderStatus("Pendente") }}
          onKeyDown={(event) => { handleInputValue(event) }}
          tabIndex="0"
        >
          Pendente
        </span>

        <span
          onClick={() => { setOrderStatus("Preparando") }}
          onKeyDown={(event) => { handleInputValue(event) }}
          tabIndex="-1"
        >
          Preparando
        </span>

        <span
          onClick={() => { setOrderStatus("Entregue") }}
          onKeyDown={(event) => { handleInputValue(event) }}
          tabIndex="-1"
        >
          Entregue
        </span>
      </Menu>
    </>
  )
}