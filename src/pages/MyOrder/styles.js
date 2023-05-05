import styled from "styled-components";

export const Container = styled.div`
  main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 7.5rem;

    padding-inline: 1rem;

    > section {
      > h3 {
        font: ${({theme}) => theme.FONTS.TITLE};
        color: ${({theme}) => theme.COLORS.TEXT};
        
        margin-bottom: 3.2rem;
      }
      
      > h4 {
        font: ${({theme}) => theme.FONTS.BACK};
        color: ${({theme}) => theme.COLORS.TEXT};
      }

    }

   > section > div {
      width: 53rem;
      height: 44.5rem;

      border: 1px solid ${({theme}) => theme.COLORS.WHITE_TRANSPARENT};
      border-radius: 5px 5px 0px 0px;
      overflow: hidden;
    
      display: grid;
      justify-items: center;
      grid-template-areas:"PIX CREDIT" "Content Content";

      > img {
        width: 27rem;
        height: 27rem;

        align-self: center;
        grid-area: Content;
      }
      
      > div {
        align-self: center;
        grid-area: Content;
        
        display: grid;
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
        height: 8.7rem;
        padding-block: 2.9rem; 
        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        
        border: none;
        
        font: ${({theme}) => theme.FONTS.TEXT_BASE};
        color: ${({theme}) => theme.COLORS.TEXT};
        border-right: 1px solid ${({theme}) => theme.COLORS.WHITE_TRANSPARENT};
        border-bottom: 1px solid ${({theme}) => theme.COLORS.WHITE_TRANSPARENT};
        
        text-align: center;
        cursor: pointer;
        
        &:first-child {
          background: ${({theme, isPixButtonSelected}) => isPixButtonSelected ? theme.COLORS.WHITE_TRANSPARENT : "none"};
          padding-inline: 10.4rem;
          grid-area: PIX;
        }

        &:nth-child(2) {
          background: ${({theme, isCreditButtonSelected}) => isCreditButtonSelected ? theme.COLORS.WHITE_TRANSPARENT : "none"};
          padding-inline: 9.4rem;
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
      padding-inline: clamp(5.3rem, 30px + 7vw, 12.3rem);
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

      font: ${({theme}) => theme.FONTS.TEXT_SM};
      color: ${({theme}) => theme.COLORS.BUTTON_LIGHT};
      
      cursor: pointer;
    }

    > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    > h4 {
      font: ${({theme}) => theme.FONTS.BACK};
      color: ${({theme}) => theme.COLORS.TEXT};
    }
    
    > span {
      font: ${({theme}) => theme.FONTS.TEXT_SM};
      color: ${({theme}) => theme.COLORS.LABEL};
    }
  }
  }
`;