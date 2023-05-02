import styled from "styled-components";

export const Container = styled.div`
  width: clamp(25rem, 9rem + 21vw, 30rem);
  height: clamp(45rem, 10rem + 30vw, 51.2rem);
  padding: 5.6rem 4rem 4rem 4rem;
  border-radius: 8px;

  background-color: ${ ({theme}) => theme.COLORS.TRANSPARENT };
  color: ${ ({theme}) => theme.COLORS.TEXT };

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  position: relative;
  
  > img {
    width: clamp(15rem, 1rem + 13vw, 17.6rem);
    max-height: 17.6rem;
  }

  > h4 {
    font: ${ ({theme}) => theme.FONTS.BACK };
    color: ${ ({theme}) => theme.FONTS.TEXT };
    font-weight: 700;

    text-align: center;
  }

  > p {
    font: ${({theme}) => theme.FONTS.TEXT_SM};
    color: ${({theme}) => theme.COLORS.LABEL};
  }

  > span {
      font: ${ ({theme}) => theme.FONTS.PRICE };
      color: ${ ({theme}) => theme.COLORS.PRICE };
  }

  > span + div {
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.6rem;

    > button {
      max-width: 9.3rem;
    }
  }

  @media(min-width: 900px){
    > span + div {
       flex-direction: row;
    }
  }
`;

export const Heart = styled.button`
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
    color: ${({theme}) => theme.COLORS.TEXT};
    fill: ${ ({IsFilled, theme}) => IsFilled ? theme.COLORS.TEXT : "none"};
  }
`;