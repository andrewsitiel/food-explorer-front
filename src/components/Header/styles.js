import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`  
  width: 100%;
  height: 9rem;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  padding: 2.4rem 1.9rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.9rem;
    
    > img {
      width: clamp(19px, 1px + 7vw, 30px);
    }
  }

  @media(min-width: 900px) {
    padding-inline:  clamp(7rem, 23px + 7vw, 12.3rem);
  }
`;

export const Menu = styled.menu`
  padding: 2rem;
  border-radius: 5px 0px 5px 5px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  
  position: absolute;
  top: 103px;
  right: 17px;
  z-index: 100;
  transition: right 300ms;
  
  display: grid;
  grid-template-areas: 
  "favorites favorites favorites"
  "input input input"
  "orders orders exit";
  gap: 3rem;

  visibility: ${({ isMenuOpen }) => isMenuOpen ? "visible" : "hidden"};

  div {
    grid-area: input;

    h3 {
      display: none;
    }

    div {
      border: none;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
    }
  }

  > div + button {
  grid-area: orders; 
  max-width: 21.6rem;
  }

  button + button {
    grid-area: exit;
    border: none;
    background: none;

    cursor: pointer;
    
    svg {
      font-size: 2.3rem;
      color: ${({ theme }) => theme.COLORS.TEXT};
    }
  }

  @media(min-width: 900px) {
    width: 100%;
    
    visibility: visible;
    padding: 0;
    
    display: flex;
    align-items: center;
    gap: 3.4rems;
    
    position: relative;
    top: 0;
    left: 0;

  }
`;

export const MenuButton = styled.button`
  width: clamp(30px, 10px + 7vw, 50px);
  height: clamp(30px, 10px + 7vw, 50px);
  border: none;
  background: none;
  
  transform-style: preserve-3d;
  transform:  ${({ isMenuOpen }) => isMenuOpen ? "rotateY(0deg)" : "rotateY(180deg)"};

  transition: transform 500ms;

  cursor: pointer;

  span {
    backface-visibility: hidden;
  }

  span:first-child {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
    transform: rotateY(0.5turn);
    
    position: absolute;
    top:0;
    left:0;

    &:before {
      content: "";
      width: 50%;
      height: 3px;
      background-color: ${({ theme }) => theme.COLORS.TEXT};
      border-radius: 5px;

      position: absolute;
      top: 41%;
      left: 25%;
    }

    &:after {
      content: "";
      width: 50%;
      height: 3px;  
      background-color: ${({ theme }) => theme.COLORS.TEXT};
      border-radius: 5px;

      position: absolute;
      top: 55%;
      left: 25%;
    }
  }

  span:last-child {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.BUTTON};

    position: absolute;
    top: 0;
    left: 0;
    
    &:before {
      content: "";
      width: 50%;
      height: 3px;
      background-color: ${({ theme }) => theme.COLORS.TEXT};
      border-radius: 5px;

      position: absolute;
      top: 50%;
      left: 25%;
      
      transform: rotate(45deg);
    }
    
    &:after {
      content: "";
      width: 50%;
      height: 3px;
      background-color:  ${({ theme }) => theme.COLORS.TEXT};
      border-radius: 5px;
      
      position: absolute;
      top: 50%;
      left: 25%;
      
      transform: rotate(-45deg);
    }
  }

  @media(min-width: 900px) {
    visibility: hidden;
    width: 0;
    height: 0;

    position: absolute;
    top: 0;
    left: 0;

    overflow: hidden;
  }
`;

export const FavoritesButton = styled.button`
    background: none;
    border: none;
    grid-area: favorites;
    justify-self: center;

    font-family: ${({ theme }) => theme.FONTS.TEXT};
    font-size: clamp(1.2rem, 0.1rem + 2vw, 1.6rem);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
    
    position: relative;

    white-space: nowrap;
    cursor: pointer;
`;

export const Anchor = styled(Link)`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: clamp(1.9rem, 0.7rem + 3vw, 2.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.TEXT};
      
  white-space: nowrap;
  text-decoration: none;
`;