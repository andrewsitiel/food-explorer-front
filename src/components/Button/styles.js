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

  font: ${ ({theme}) => theme.FONTS.BUTTON_TEXT };
  color: ${ ({theme}) => theme.COLORS.TEXT };

  transition: background-color 150ms;

  cursor: pointer;
  &:hover {
    background-color: ${ ({theme}) => theme.COLORS.BUTTON_DARK };
  }

  > svg {
    font-size: 2rem;
  }
`;