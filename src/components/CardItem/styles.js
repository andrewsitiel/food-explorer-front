import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: clamp(25rem, 9rem + 21vw, 30rem);
  height: clamp(45rem, 10rem + 30vw, 51.2rem);
  padding: 5.6rem 4rem 4rem 4rem;
  border-radius: 8px;

  background-color: ${ ({theme}) => theme.COLORS.TRANSPARENT };
  color: ${ ({theme}) => theme.COLORS.TEXT };

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  position: relative;
  text-decoration: none;
  
  > img {
    width: clamp(15rem, 1rem + 13vw, 17.6rem);
    max-height: 17.6rem;
  }

  > h4 {
    font-family: ${({theme}) => theme.FONTS.TITLE};
    font-size: clamp(2rem, 0.5rem + 2vw, 2.4rem);
    font-weight: 700;
    color: ${ ({theme}) => theme.FONTS.TEXT };

    text-align: center;
  }

  > p {
      font-family: ${({theme}) => theme.FONTS.TEXT};
      font-size: clamp(1rem, 0.1rem + 3vw, 1.4rem);
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.LABEL};
      
      text-align: center;
  }

  > span {
      font-family: ${({theme}) => theme.FONTS.TEXT};
      font-size: clamp(1.9rem, 0.3rem + 5vw, 3.2rem);
      font-weight: 400;
      color: ${ ({theme}) => theme.COLORS.PRICE };
  }

  > span + div {
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.6rem;

    > button {
      max-width: 9.3rem;
    }
  }

  @media(min-width: 900px){
    > span + div {
       flex-direction: row;
    }
  }
`;

export const Heart = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 5;
  
  margin: 0;
  
  background: none;
  border: none;
  
  cursor: pointer;
  
  > svg {
    font-size: clamp(2.6rem, 1rem + 5vw, 3.2rem);
    color: ${({theme}) => theme.COLORS.TEXT};
    fill: ${ ({IsFilled, theme}) => IsFilled ? theme.COLORS.TEXT : "none"};
  }
`;