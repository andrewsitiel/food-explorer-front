import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const appear = keyframes`
  0% {
    transform: translateX(100vw);
  }

  100% {
    transform: translateX(0vw);
  }
`;

export const Container = styled.div`
  width: clamp(25rem, 9rem + 21vw, 30rem);
  height: clamp(45rem, 10rem + 30vw, 51.2rem);
  padding: 3.6rem 6.2rem 3.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  position: relative;

  transform: translateX(100vw);

  animation-name: ${appear};
  animation-duration: 700ms;
  animation-delay: ${({ delay }) => `${delay}00ms`};
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  
  > img {
    width: clamp(15rem, 1rem + 13vw, 17.6rem);
    height: clamp(15rem, 1rem + 13vw, 17.6rem);
    border-radius: 50%;

    /* margin-top: 3rem; */
  }

  > p {
      font-family: ${({ theme }) => theme.FONTS.TEXT};
      font-size: clamp(1rem, 0.1rem + 3vw, 1.4rem);
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LABEL};
      
      text-align: center;

      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
  }

  > span {
      font-family: ${({ theme }) => theme.FONTS.TEXT};
      font-size: clamp(1.9rem, 0.3rem + 5vw, 3.2rem);
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.PRICE};
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

export const Anchor = styled(Link)`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: clamp(2rem, 0.5rem + 2vw, 2.4rem);
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.TEXT};

  text-align: center;
  text-decoration: none;
`;