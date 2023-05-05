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
    font: ${ ({theme}) => theme.FONTS.TITLE };
    color: ${ ({theme}) => theme.COLORS.TEXT };

    margin: 0rem 0rem 3.4rem 3.2rem;
  }

  @media(min-width: 900px) {
    padding-inline: clamp(5.3rem, 30px + 7vw, 12.3rem);
  }
`;

export const Table = styled.table`
  width: 100%;
  margin: auto;

  text-align: left;
  color: ${ ({theme}) => theme.COLORS.TEXT };
  font: ${ ({theme}) => theme.FONTS.TEXT_SM };

  border-radius: 6px 6px 0px 0px;

  &, th, td {
    border: 1px solid ${ ({theme}) => theme.COLORS.TEXT_TRANSPARENT };
    border-spacing: 0rem;
  }

  th {
    padding: 2.1rem 2rem 2.1rem 2.4rem;

    &:first-child {
      border-top-left-radius: 5px;
    };

    &:last-child {
      border-top-right-radius: 5px;
    } 
  }

  td {
    padding: 1.6rem 2rem 1.6rem 2.4rem;
    position: relative;
  }
`;