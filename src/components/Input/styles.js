import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  > div {
    padding: 1.2rem 1.4rem;
    height: 4.8rem; 

    border: 1px solid ${ ({theme}) => theme.COLORS.TEXT };
    border-radius: 5px;

    margin-top: ${({Title}) => Title ? "0.8rem" : "0rem"};

    display: flex;
    align-items: center;
    gap: 1.4rem;

    &:focus-within {
      border-color: ${ ({theme}) => theme.COLORS.BUTTON };
    }
    
    > input {
      width: 100%;
      border: none;
      background: transparent;

      font-family: ${({theme}) => theme.FONTS.TEXT};
      font-size: clamp(1rem, 0.1rem + 3vw, 1.4rem);
      font-weight: 400;
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

    svg {
      font-size: 2.4rem;
      color: ${ ({theme}) => theme.COLORS.TEXT };
    }
  }

  > label {
    font-family: ${({theme}) => theme.FONTS.TEXT};
    font-size: clamp(1.2rem, 0.1rem + 2vw, 1.6rem);
    font-weight: 400;
    color: ${ ({theme}) => theme.COLORS.LABEL };
  }
`;