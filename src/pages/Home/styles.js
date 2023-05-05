import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;

  > main {
    padding-inline: 1rem;
  }

  > main > div {
    display: flex;
    align-items: center;
    gap: 1.1rem;

    position: relative;
        
    > img {
      width: clamp(10rem, 5rem + 46vw, 63.2rem);

      transform: translateX(-70px);
    }

    > div {
      transform: translateY(46px);

      > h3 {
        font: ${ ({theme}) => theme.FONTS.TITLE };
        color: ${ ({theme}) => theme.COLORS.TEXT };
        
        margin-bottom: 8px;
      }
      
      > p {
        font: ${ ({theme}) => theme.FONTS.INGREDIENT };
        color: ${ ({theme}) => theme.COLORS.TEXT };
      }
    }

    &:before {
      content: "";
      width: 100%;
      height: 65%;

      position: absolute;
      top: 32%;
      left: -5px;
      z-index: -100;

      background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
      border-radius: 8px;
    }
  }

  main > section {
    margin-top: 6rem;

    > h4 {
      font: ${({theme}) => theme.FONTS.TITLE};
      color: ${({theme}) => theme.COLORS.TEXT};
      margin-bottom: 3.9rem;
    }
  }

  @media(min-width: 900px) {
    > main {
      padding-inline: clamp(5.3rem, 30px + 7vw, 12.3rem);
    }
  }
`;