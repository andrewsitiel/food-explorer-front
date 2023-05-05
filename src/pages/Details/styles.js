import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 4.1rem;
  
  padding-inline: 1.9rem;
  color: ${ ({theme}) => theme.COLORS.TEXT };

  a {
    align-self: start;
    justify-self: center;
    margin-left: 1.5rem;

    font: ${ ({theme}) => theme.FONTS.BACK };

    position: relative;

    &:before {
      content: "";

      position: absolute;
      top: 10px;
      left: -26px;

      width: 1.5rem;
      height: 1.5rem;
      border-top: 1px solid ${ ({theme}) => theme.COLORS.TEXT };
      border-left: 1px solid ${ ({theme}) => theme.COLORS.TEXT };
      
      transform: rotate(-45deg);
    }
  }

  img {
    width: clamp(27rem, 20rem + 19vw, 38.9rem);
    max-width: 38.9rem;

    margin: auto;
  }

  > div {

    h3 {
      font: ${ ({theme}) => theme.FONTS.TEXT_XL };
      margin-bottom: 0.8rem;
    }

    > div:nth-child(3) {
      margin: 2.6rem 0rem 4.3rem;
    }
    
    > div:nth-child(4) {
      display: flex;
      align-items: center;

      > button {
        max-width: 9.2rem;
      }

      > span:nth-child(1) {
        font: ${ ({theme}) => theme.FONTS.PRICE };
        color: ${ ({theme}) => theme.COLORS.PRICE };
      }

      > div {
        margin: 0rem 2.4rem 0rem 5.3rem;
      }
    }
    
    p {
      font: ${ ({theme}) => theme.FONTS.DESCRIPTION };
    }
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-areas: 
    "link link link"
    "image content content"
    ;

    padding-inline: 12.2rem;

    a {
      grid-area: link;
      align-self: center;
      justify-self: start;
      cursor: pointer;
    }

    > div {
      grid-area: content;
    }

    img {
      grid-area: image;
    }
  }
`;