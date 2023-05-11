import styled from "styled-components";

export const Container = styled.div`
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: space-between;
    gap: 7.5rem;

    padding-inline: 5rem;

    > section {
      > h3 {
        font: 500 clamp(19px, 3px + 5vw, 32px) "Poppins", sans-serif;
        color: ${({theme}) => theme.COLORS.TEXT};
        
        margin-bottom: 3.2rem;
      }
      
      > h4 {
        font: 500 clamp(20px, 5px + 2vw, 24px) "Poppins", sans-serif;
        color: ${({theme}) => theme.COLORS.TEXT};
      }

    }

   > section > div {
      width: clamp(25rem, 9rem + 50vw, 53rem);
      height: 44.5rem;

      border: 1px solid ${({theme}) => theme.COLORS.WHITE_TRANSPARENT};
      border-radius: 5px 5px 0px 0px;
      overflow: hidden;
    
      display: grid;
      justify-items: center;
      grid-template-areas:"PIX CREDIT" "Content Content";

      > img {
        width: clamp(19rem, 10rem + 15vw, 25rem);
        height: clamp(19rem, 10rem + 15vw, 25rem);

        grid-area: Content;
      }
      
      > div {
        grid-area: Content;
        
        display: grid;
        justify-items: center;
        grid-template-areas: "CreditNumber CreditNumber" "CVC DATA"
        "Button Button";

        gap: 3.7rem;

        > div:nth-child(1){
          grid-area: CreditNumber;
        }

        > div:nth-child(2){
          grid-area: CVC;
        }

        > div:nth-child(3){
          grid-area: DATA;
        }

        > button:nth-child(4){
          grid-area: Button;
        }
      }

      > button {
        width: 100%;
        height: 8.7rem;
        padding-block: 2.9rem; 
        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        
        border: none;
        
        font: 400 clamp(12px, 1px + 2vw, 16px) "Roboto", sans-serif;
        color: ${({theme}) => theme.COLORS.TEXT};
        border-right: 1px solid ${({theme}) => theme.COLORS.WHITE_TRANSPARENT};
        border-bottom: 1px solid ${({theme}) => theme.COLORS.WHITE_TRANSPARENT};
        
        text-align: center;
        cursor: pointer;
        
        &:first-child {
          background: ${({theme, isPixButtonSelected}) => isPixButtonSelected ? theme.COLORS.WHITE_TRANSPARENT : "none"};
          grid-area: PIX;
        }

        &:nth-child(2) {
          background: ${({theme, isCreditButtonSelected}) => isCreditButtonSelected ? theme.COLORS.WHITE_TRANSPARENT : "none"};
          grid-area: CREDIT;
        }
        
        > svg {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
   }
  }

  @media(min-width: 900px) {
    > main {
      padding-inline:  clamp(7rem, 23px + 7vw, 12.3rem);
      flex-direction: row;

      > section > div {
        width: clamp(20rem, 1rem + 37vw, 53rem);
      }
    }
  }
`;

export const ListItem = styled.li`
  list-style: outside;
  
  display: flex;
  align-items: center;
  gap: 1.3rem;

  margin-bottom: 1.6rem;

  > img {
    width: 7.2rem;
    height: 7.2rem;
  }

  > div {
    > button {
      background: none;
      border: none;

      font: 400 clamp(10px, 1px + 3vw, 14px) "Roboto", sans-serif;
      color: ${({theme}) => theme.COLORS.BUTTON_LIGHT};
      
      cursor: pointer;
    }

    > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    > h4 {
      font:500 clamp(20px, 5px + 2vw, 24px) "Poppins", sans-serif;
      color: ${({theme}) => theme.COLORS.TEXT};
    }
    
    > span {
      font: 400 clamp(10px, 1px + 3vw, 14px) "Roboto", sans-serif;
      color: ${({theme}) => theme.COLORS.LABEL};
    }
  }
  }
`;