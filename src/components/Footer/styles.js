import styled from "styled-components";

export const Container = styled.footer`  
  width: 100vw;
  align-self: end;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  background-color: ${ ({theme}) => theme.COLORS.BACKGROUND };
  padding: 2.3rem 1.9rem;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.9rem;
    
    > h1 {
      font: ${ ({theme}) => theme.FONTS.LOGO_HEADER };
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
    font: ${ ({theme}) => theme.FONTS.TEXT_BASE };
    color: ${ ({theme}) => theme.COLORS.TEXT };
    white-space: wrap;
  };

  @media(min-width: 900px) {
    padding-inline: clamp(5.3rem, 30px + 7vw, 12.3rem);;
  }
`;