import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > span {
    font-family: ${({theme}) => theme.FONTS.TEXT};
    font-size: clamp(0.7rem, 0.3rem + 5vw, 2rem);
    font-weight: 700;
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