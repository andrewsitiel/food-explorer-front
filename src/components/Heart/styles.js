import styled from "styled-components";

export const Container = styled.button`
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
    color: ${({ theme }) => theme.COLORS.TEXT};
    fill: ${({ IsFilled, theme }) => IsFilled ? theme.COLORS.TEXT : "none"};
  }
`;