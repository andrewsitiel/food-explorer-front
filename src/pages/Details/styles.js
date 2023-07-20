import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.1rem;
  
  padding-inline: 1.9rem;
  color: ${({ theme }) => theme.COLORS.TEXT};

  img {
    width: clamp(27rem, 20rem + 19vw, 38.9rem);
    height: clamp(27rem, 20rem + 19vw, 38.9rem);
    border-radius: 50%;

    margin: auto;
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-areas: 
    "link link link"
    "image content content"
    ;

    padding-inline:  clamp(7rem, 23px + 5vw, 12.3rem);

    > div {
      grid-area: content;
    }

    img {
      grid-area: image;
    }
  }
`;

export const DESCRIPTION = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: clamp(5.2rem, 0.3rem + 4vw, 5.6rem);
    font-weight: 500;
    
    text-align: center;
    margin-bottom: 0.8rem;
  }

  > div:nth-child(3) {
    margin: 2.6rem 0rem 4.3rem;
  }
  
  > div:nth-child(4) {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    > button {
      max-width: 9.2rem;
    }

    > span:nth-child(1) {
      font-family: ${({ theme }) => theme.FONTS.TEXT};
      font-size: clamp(1.9rem, 0.3rem + 5vw, 3.2rem);
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.PRICE};

      white-space: nowrap;
    }

    > div {
      margin: 0rem 2.4rem 0rem 5.3rem;
    }
  }
  
  p {
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: clamp(2rem, 0.3rem + 5vw, 2.4rem) ;
    font-weight: 400;

    text-align: center;
  }


  @media(min-width: 900px) {
    align-items: flex-start;

    > div:nth-child(4) {
      justify-content: flex-start;
    }

    > h3, p {
      text-align: left;
    }
  }
`;

export const Anchor = styled(Link)`
    align-self: start;
    justify-self: center;
    margin-left: 1.5rem;

    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: clamp(2rem, 0.5rem + 2vw, 2.4rem);
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TEXT};
    text-decoration: none;

    position: relative;

    &:before {
      content: "";

      position: absolute;
      top: 10px;
      left: -26px;

      width: 1.5rem;
      height: 1.5rem;
      border-top: 1px solid ${({ theme }) => theme.COLORS.TEXT};
      border-left: 1px solid ${({ theme }) => theme.COLORS.TEXT};
      
      transform: rotate(-45deg);
    }

    @media (min-width: 900px) {
 
      grid-area: link;
      align-self: center;
      justify-self: start;
      cursor: pointer;

    }
`;