import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  background: ${ ({ theme, IsNew }) => IsNew ? "transparent": theme.COLORS.TRANSPARENT };
  padding: 0.65rem 1.6rem;
  
  border: ${ ({ theme, IsNew }) =>  IsNew ? `dashed 1px ${theme.COLORS.TEXT_TRANSPARENT}` : "none" };
  border-radius: 5px;
  
  > input {
      border: none;
      background: transparent;

      font: ${ ({theme}) => theme.FONTS.TEXT_SM };
      color: ${ ({theme}) => theme.COLORS.TEXT };

      &:-webkit-autofill {
        border: none;
        -webkit-text-fill-color: ${ ({theme}) => theme.COLORS.TEXT };
        -webkit-box-shadow: 0 0 0px 1000px ${ ({ theme }) => theme.COLORS.BACKGROUND } inset;
      }

      &:focus {
        outline: none;
      }
  }

  > button {
    background: transparent;
    border: none;
    cursor: pointer;
    
    > svg {
      font-size: 0.8rem;
      color: ${ ({theme}) => theme.COLORS.TEXT };
    }
  }
`;