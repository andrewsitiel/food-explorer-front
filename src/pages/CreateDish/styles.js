import styled from "styled-components";

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
  grid-template-columns: 1fr;
  grid-template-areas: 
  "back"
  "title"
  "image"
  "name"
  "ingredients"
  "price"
  "category"
  "textarea"
  "button"
  ;
  gap: 3.2rem;
  
  > a:nth-child(1) {
    grid-area: back;
  }

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

  > button:nth-child(9) {
    grid-area: button;
  }

  a {
    align-self: center;
    justify-self: start;
    margin-left: 1.5rem;

    font: ${ ({theme}) => theme.FONTS.BACK };
    color: ${ ({theme}) => theme.COLORS.TEXT };

    position: relative;
    cursor: pointer;

    &:before {
      content: "";

      position: absolute;
      top: 8px;
      left: -26px;

      width: 1.5rem;
      height: 1.5rem;
      border-top: 1px solid ${ ({theme}) => theme.COLORS.TEXT };
      border-left: 1px solid ${ ({theme}) => theme.COLORS.TEXT };
      
      transform: rotate(-45deg);
    }
  }

  > h3 {
    font: ${ ({theme}) => theme.FONTS.TITLE };
    color: ${ ({theme}) => theme.COLORS.TEXT };
  }

  > div > label {
      font: ${ ({theme}) => theme.FONTS.BUTTON_TEXT };
      color: ${ ({theme}) => theme.COLORS.LABEL };

      margin-bottom: 1rem;
  }

  > div h4 {
      font: ${ ({theme}) => theme.FONTS.BUTTON_TEXT };
      color: ${ ({theme}) => theme.COLORS.LABEL };
      
      margin-bottom: 0.8rem;
  }

  > div:nth-child(3) {
    position: relative;
    cursor: pointer;

    label {
      font: ${ ({theme}) => theme.FONTS.TEXT_SM };
      color: ${ ({theme}) => theme.COLORS.LABEL };
      white-space: nowrap;

      cursor: pointer;
    }

    svg {
      font-size: 2.4rem;
      color: ${ ({theme}) => theme.COLORS.TEXT };
    }

    input {
        width: 100%;
        height: 48px;
        opacity: 0;
              
        position: absolute;
        top: 0;
        left: 0;
        z-index: -10;
    }
  }

  > div:nth-child(3) > div {
    padding: 1.2rem 3.2rem;

    &:hover {
      border-color: ${ ({theme}) => theme.COLORS.BUTTON }
    }
  }

  > div:nth-child(5) > div {
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
      background: ${ ({theme}) => theme.COLORS.TEXT_TRANSPARENT };
      border-radius: 10px;
    }
  }
  
  > div:nth-child(3) > div,
  > div:nth-child(5) > div {
      height: 4.8rem;

      border: 1px solid ${ ({theme}) => theme.COLORS.TEXT };
      border-radius: 5px;

      display: flex;
      align-items: center;
      gap: 1.4rem;

      &:focus-within {
        border-color:  ${ ({theme}) => theme.COLORS.BUTTON };
      }
  }

  > div textarea {
      width: 100%;
      padding: 12px 14px;
      background: transparent;
      
      margin-top: 0.8rem;

      border: 1px solid ${ ({theme}) => theme.COLORS.TEXT };
      border-radius: 5px;

      font: ${ ({theme}) => theme.FONTS.TEXT_SM };
      color: ${ ({theme}) => theme.COLORS.TEXT };

      resize: none;

      &:-webkit-autofill {
        border: none;
        -webkit-text-fill-color: ${ ({theme}) => theme.COLORS.TEXT };
        -webkit-box-shadow: 0 0 0px 1000px ${ ({ theme }) => theme.COLORS.BACKGROUND } inset;
      }

      &:focus {
        outline: none;
        border-color: ${ ({theme}) => theme.COLORS.BUTTON };
      }
    }

    > button {
      justify-self: center;

      width: 100%;
      max-width: 35.7rem;
      padding-block: 1.2rem;
      background: ${ ({theme}) => theme.COLORS.TRANSPARENT};

      border: solid 1px ${ ({theme}) => theme.COLORS.TEXT };
      border-radius: 5px;

      font: ${ ({theme}) => theme.FONTS.BUTTON_TEXT };
      color: ${ ({theme}) => theme.COLORS.TEXT };

      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
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
    "button button"
    ;
  }

  @media (min-width: 900px) {
    padding-inline: 12.2rem;

    grid-template-columns: 251px 1fr 150px 150px;
    grid-template-areas:
    "back back back back"
    "title title title title"
    "image name name name"
    "ingredients ingredients price category"
    "textarea textarea textarea textarea"
    "button button button button"
    ;

    > button {
        justify-self: end;
      }
  }

`;