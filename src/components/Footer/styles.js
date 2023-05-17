import styled from "styled-components";
import { Link } from "react-router-dom";

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

  p {
    font-family: ${({theme}) => theme.FONTS.FOOTER};
    font-size: clamp(1.2rem, 0.1rem + 2vw, 1.6rem);
    font-weight: 400;
    color: ${ ({theme}) => theme.COLORS.TEXT };

    white-space: wrap;
  };

  @media(min-width: 900px) {
    padding-inline:  clamp(7rem, 23px + 7vw, 12.3rem);
  }
`;

export const Anchor = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.9rem;

  text-decoration: none;
  > h1 {
    font-family: ${({theme}) => theme.FONTS.TEXT};
    font-size: clamp(1.9rem, 0.7rem + 3vw, 2.5rem);
    font-weight: 700;
    color: ${ ({theme}) => theme.COLORS.TEXT_TRANSPARENT };
    white-space: nowrap;
  }

  > img {
    width: clamp(19px, 1px + 7vw, 30px);
    
    path {
      fill: ${ ({theme}) => theme.COLORS.TEXT_TRANSPARENT };
    }
  }
`;