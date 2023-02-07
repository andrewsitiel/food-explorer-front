import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > span {
    font:  ${ ({theme}) => theme.FONTS.ITEMS };
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