import styled from "styled-components";

export const Container = styled.footer`  
  width: 100vw;
  padding: 2.3rem 1.9rem;
  align-self: end;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  margin-top: 6rem;

  background-color: ${ ({theme}) => theme.COLORS.BACKGROUND };
  
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.9rem;
    
    > h1 {
      font: 700 clamp(19px, 7px + 3vw, 25px) "Roboto", sans-serif;
      color: ${ ({theme}) => theme.COLORS.TEXT_TRANSPARENT };
      white-space: nowrap;
    }
    
    > img {
      width: clamp(19px, 1px + 7vw, 30px);
     
      path {
        fill: ${ ({theme}) => theme.COLORS.TEXT_TRANSPARENT };
      }
    }
  };

  p {
    font-family: ${({theme}) => theme.FONTS.FOOTER};
    font-size: clamp(12px, 1px + 2vw, 16px);
    font-weight: 400;
    color: ${ ({theme}) => theme.COLORS.TEXT };
    
    white-space: wrap;
  };

  @media(min-width: 900px) {
    padding-inline:  clamp(7rem, 23px + 7vw, 12.3rem);
  }
`;