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
  color: ${ ({theme}) => theme.COLORS.TEXT };

  a {
    align-self: start;
    justify-self: center;
    margin-left: 1.5rem;

    font: 500 clamp(20px, 5px + 2vw, 24px) "Poppins", sans-serif;

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

  @media (min-width: 900px) {
    display: grid;
    grid-template-areas: 
    "link link link"
    "image content content"
    ;

    padding-inline:  clamp(7rem, 23px + 5vw, 12.3rem);

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

export const DESCRIPTION = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font: 500 clamp(52px, 3px + 4vw, 56px) "Poppins", sans-serif;
    text-align: center;
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
      font: 400 clamp(19px, 3px + 5vw, 32px) "Roboto", sans-serif;
      color: ${ ({theme}) => theme.COLORS.PRICE };
    }

    > div {
      margin: 0rem 2.4rem 0rem 5.3rem;
    }
  }
  
  p {
    font: 400 clamp(20px, 3px + 5vw, 24px) "Poppins", sans-serif;
    text-align: center;
  }


  @media(min-width: 900px) {
    align-items: flex-start;

    > h3, p {
      text-align: left;
    }
  }
`;