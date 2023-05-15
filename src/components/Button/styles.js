import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  border: none;
  border-radius: 5px;
  background-color: ${ ({theme}) => theme.COLORS.BUTTON };

  font-family: ${({theme}) => theme.FONTS.TITLE};
  font-size: clamp(0.5rem, 0.3rem + 3vw, 1.4rem);
  font-weight: 500;
  color: ${ ({theme}) => theme.COLORS.TEXT };

  transition: background-color 150ms;

  cursor: pointer;
  &:hover {
    background-color: ${ ({theme}) => theme.COLORS.BUTTON_DARK };
  }

  > svg {
    font-size: clamp(1rem, 0.5rem + 2vw, 2rem);
  }
`;