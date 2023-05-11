import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > span {
    font:  700 clamp(7px, 3px + 5vw, 20px) "Roboto", sans-serif;
    color: ${ ({theme}) => theme.COLORS.TEXT };
  }

  button {
    background: none;
    border: none;

    color: ${ ({theme}) => theme.COLORS.TEXT };
    font-size: 1.8rem;

    cursor: pointer;
  }
`;