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
    font-family: ${({theme}) => theme.FONTS.TITLE};
    font-size: clamp(1.9rem, 0.3rem + 5vw, 3.2rem);
    font-weight: 500;
    color: ${ ({theme}) => theme.COLORS.TEXT };

    margin: 0rem 0rem 3.4rem 3.2rem;
  }

  @media(min-width: 900px) {
    padding-inline: clamp(7rem, 23px + 7vw, 12.3rem);
  }
`;