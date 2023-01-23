import styled from "styled-components";

export const Container = styled.button`

  width: 100%;
  height: 4.8rem;
  background-color: ${ ({theme}) => theme.COLORS.BUTTON };
  border: none;
  border-radius: 5px;

  font: ${ ({theme}) => theme.FONTS.BUTTON_TEXT };
  color: ${ ({theme}) => theme.COLORS.TEXT };

  transition: background-color 150ms;

  &:hover {
    background-color: ${ ({theme}) => theme.COLORS.BUTTON_DARK };
  }
`;