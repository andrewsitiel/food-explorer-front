import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  height: 100%;
  padding-inline: 1.9rem;

  overflow: auto;

  h2 {
    font: 500 clamp(19px, 3px + 5vw, 32px) "Poppins", sans-serif;
    color: ${ ({theme}) => theme.COLORS.TEXT };

    margin: 0rem 0rem 3.4rem 3.2rem;
  }

  @media(min-width: 900px) {
    padding-inline: clamp(7rem, 23px + 7vw, 12.3rem);
  }
`;