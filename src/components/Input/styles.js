import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  > div {
    padding: 12px 14px;
    border: 1px solid ${ ({theme}) => theme.COLORS.TEXT };
    border-radius: 5px;

    &:focus-within {
      border-color: ${ ({theme}) => theme.COLORS.BUTTON };
    }
    
    > input {
      width: 100%;
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
  }

  > h3 {
    font: ${ ({theme}) => theme.FONTS.TEXT_BASE };
    color: ${ ({theme}) => theme.COLORS.TEXT };

    margin-bottom: 0.8rem;
  }
`;