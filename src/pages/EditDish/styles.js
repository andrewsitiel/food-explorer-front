import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;
`;

export const Main = styled.main`
  padding: 2.4rem 1.9rem 10rem;
  
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  "back"
  "title"
  "image"
  "name"
  "ingredients"
  "price"
  "category"
  "textarea"
  "buttons"
  ;
  gap: 3.2rem;

  > h3:nth-child(2) {
    grid-area: title;
  }
  
  > div:nth-child(3) {
    grid-area: image;
  }

  > div:nth-child(4) {
    grid-area: name;
  }

  > div:nth-child(5) {
    grid-area: ingredients;
  }
  > div:nth-child(6) {
    grid-area: price;
  }

  > div:nth-child(7) {
    grid-area: category;
  }

  > div:nth-child(8) {
    grid-area: textarea;
  }

  > div:nth-child(9) {
    grid-area: buttons;
  }

  > h3 {
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: clamp(1.9rem, 0.3rem + 5vw, 3.2rem);
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TEXT};
  }

  > div > label {
      font-family: ${({ theme }) => theme.FONTS.TITLE};
      font-size: clamp(1rem, 0.5rem + 2vw, 1.4rem);
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LABEL};

      margin-bottom: 1rem;
  }

  > div h4 {
      font-family: ${({ theme }) => theme.FONTS.TITLE};
      font-size: clamp(1rem, 0.5rem + 2vw, 1.4rem);
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LABEL};
      
      margin-bottom: 0.8rem;
  }

  > div:nth-child(3) {
    position: relative;

    p {
      font-family: ${({ theme }) => theme.FONTS.TEXT};
      font-size: clamp(1rem, 0.1rem + 3vw, 1.4rem);
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LABEL};

      white-space: nowrap;
    }

    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.TEXT};
    }

    input {
        position: absolute;
        z-index: -10;
        opacity: 0;
    }

    &:focus-within {
      border-color: ${({ theme }) => theme.COLORS.BUTTON}
    }
  }

  > div:nth-child(3) > div {
    padding: 1.2rem 3.2rem;
    position: relative;

    label {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;

      width: 100%;
      height: 100%;

      cursor: pointer;
    }
  }

  > div:nth-child(5) {
    width: 100%;
    max-width: calc(94vw - 1.9rem);
    justify-self: center;
    
    > div {
      padding: 1.2rem 0.8rem;
      
      overflow-x: overlay;
      overflow-y: hidden;
      
      &::-webkit-scrollbar {
        position: absolute;
        height: 5px;
      }
      
      &::-webkit-scrollbar-track {
        background: none;
      }
      
      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.TEXT_TRANSPARENT};
        border-radius: 10px;
      }
    }
  }
    
  > div:nth-child(3) > div,
  > div:nth-child(5) > div {
      height: 4.8rem;

      border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
      border-radius: 5px;

      display: flex;
      align-items: center;
      gap: 1.4rem;

      &:focus-within {
        border-color:  ${({ theme }) => theme.COLORS.BUTTON};
      }
  }

  > div:nth-child(6) > div {
    position: relative;
    padding: 1.2rem 1.4rem 1.2rem 3.4rem;

    &::before {
      content: "R$";
      width: fit-content;
      height: fit-content;

      font-family: ${({ theme }) => theme.FONTS.TEXT};
      font-size: clamp(1rem, 0.1rem + 3vw, 1.4rem);
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.TEXT};
      
      
      position: absolute;
      top: a;
      left: 14px;
      z-index: 10;
    }
  }

  > div textarea {
      width: 100%;
      padding: 12px 14px;
      background: transparent;
      
      margin-top: 0.8rem;

      border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
      border-radius: 5px;

      font-family: ${({ theme }) => theme.FONTS.TEXT};
      font-size: clamp(1rem, 0.1rem + 3vw, 1.4rem);
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.TEXT};

      resize: none;

      &:-webkit-autofill {
        border: none;
        -webkit-text-fill-color: ${({ theme }) => theme.COLORS.TEXT};
        -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.COLORS.BACKGROUND} inset;
      }

      &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.COLORS.BUTTON};
      }
    }

  > div:nth-child(9) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;

    > button {
      width: 100%;
      max-width: 35.7rem;
      max-height: 4.7rem;
      padding-block: 1.2rem;
      
      justify-self: center;
      
      border: solid 1px ${({ theme }) => theme.COLORS.TEXT};
      border-radius: 5px;
      
      font-family: ${({ theme }) => theme.FONTS.TITLE};
      font-size: clamp(1rem, 0.5rem + 2vw, 1.4rem);
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.TEXT};
      
      cursor: pointer;
      
      &:hover {
        filter: brightness(0.9);
      }

      &:nth-child(1) {
        background: ${({ theme }) => theme.COLORS.WHITE_TRANSPARENT};
      }
      
      &:nth-child(2) {
        background: ${({ theme }) => theme.COLORS.BUTTON};
      }
    }
  }

  @media(min-width: 600px){
    grid-template-columns: 1fr 2fr;
    grid-template-areas: 
    "back back"
    "title title"
    "image name"
    "ingredients ingredients"
    "price category"
    "textarea textarea"
    "buttons buttons"
    ;

    > div:nth-child(9) {
      flex-direction: row;
  }
  }

  @media (min-width: 900px) {
    padding-inline:  clamp(7rem, 23px + 7vw, 12.3rem);

    grid-template-columns: 251px 1fr 150px 150px;
    grid-template-areas:
    "back back back back"
    "title title title title"
    "image name name name"
    "ingredients ingredients price category"
    "textarea textarea textarea textarea"
    "buttons buttons buttons buttons"
    ;

    > div:nth-child(5) {
      justify-self: unset;
    }
  }
`;

export const Anchor = styled(Link)`
  grid-area: back;
  align-self: center;
  justify-self: start;
  
  margin-left: 1.5rem;
  
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: clamp(2rem, 0.5rem + 2vw, 2.4rem);
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-decoration: none;

  position: relative;
  cursor: pointer;

  &:before {
    content: "";

    position: absolute;
    top: 8px;
    left: -26px;

    width: 1.5rem;
    height: 1.5rem;
    border-top: 1px solid ${({ theme }) => theme.COLORS.TEXT};
    border-left: 1px solid ${({ theme }) => theme.COLORS.TEXT};
    
    transform: rotate(-45deg);
  }
`;

export const Select = styled.div`
  width: 100%;

  
  > div {
    padding: 1.2rem 1.4rem;
    height: 4.8rem;
    
    border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
    border-radius: 5px;
    
    margin-top: 0.8rem;
    
    display: flex;
    align-items: center;
    gap: 1.4rem;
    
    &:focus-within {
      border-color: ${({ theme }) => theme.COLORS.BUTTON};
    }

  > select {
    
      width: 100%;
      border: none;
      background: transparent;
      
      font-family: ${({ theme }) => theme.FONTS.TEXT};
      font-size: clamp(1rem, 0.1rem + 3vw, 1.4rem);
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.TEXT};

      &:focus {
        outline: none;
      }

      > option {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND}
      }
    }
    
    > label {
      font-family: ${({ theme }) => theme.FONTS.TEXT};
      font-size: clamp(1.2rem, 0.1rem + 2vw, 1.6rem);
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LABEL};
    }
  }
`;