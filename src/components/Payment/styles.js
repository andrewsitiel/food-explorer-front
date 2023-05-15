import styled from "styled-components";

export const Container = styled.div`
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

 > button {
    width: 100%;
    height: 8.7rem;
    padding-block: 2.9rem; 
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    
    border: none;
    
    font-family: ${({theme}) => theme.FONTS.TEXT};
    font-size: clamp(1.2rem, 0.1rem + 2vw, 1.6rem);
    font-weight: 400;
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

    &:disabled {
      background: none;
    }
    
    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  } 

  @media(min-width: 900px) {
    width: clamp(20rem, 1rem + 37vw, 53rem);
  }
`;