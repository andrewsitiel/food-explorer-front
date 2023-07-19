import styled, { keyframes } from "styled-components";

const appear = keyframes`
  0%{transform: translateX(-100vw); opacity: 0;}

  50%{opacity: 0.5;}

  100%{transform: translateX(0vw); opacity: 1;}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;

  > main {
    padding-inline: 1.5rem;
  }

  > main > div {
    display: flex;
    align-items: center;

    position: relative;
    animation: ${appear} 1s ease-out;
        
    > img {
      width: clamp(10rem, 1rem + 46vw, 63.2rem);
      transform: translateX(0);
    }

    > div {

      > h3 {  
        font-family: ${({ theme }) => theme.FONTS.TITLE};
        font-size: clamp(1.5rem, 0.5rem + 3vw, 4rem);
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.TEXT};
        
        margin-bottom: 8px;
      }
      
      > p {
        font-family: ${({ theme }) => theme.FONTS.TITLE};
        font-size: clamp(0.9rem, 0.1rem + 2vw, 1.6rem);
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.TEXT};
      }
    }

    &:before {
      content: "";
      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;
      z-index: -100;

      background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
      border-radius: 8px;
    }
  }

  main > section {
    margin-top: 6rem;

    > h4 {
      font-family: ${({ theme }) => theme.FONTS.TITLE};
      font-size: clamp(1.9rem, 0.3rem + 5vw, 3.2rem);
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.TEXT};
      
      margin-bottom: 3.9rem;
    }
  }

  @media(min-width: 900px) {
    > main {
      padding-inline: clamp(7rem, 23px + 7vw, 12.3rem);

      > div {
        > img {
          transform: translateX(-70px);
        }

        > div {
          transform: translateY(46px);
        }

        &::before{
          height: 65%;
          position: absolute;
          top: 32%;
          left: -5px;
        }
      }
    }
  }
`;