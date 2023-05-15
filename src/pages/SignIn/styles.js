import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media(min-width: 900px) {
    height: 100vh;
    padding: 0rem 9rem 0rem 15rem;
    
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.9rem;
  
  margin-top: 7rem;

  > h1 {
    font: 700 clamp(30px, 5px + 5vw, 43px) "Roboto", sans-serif;
    color: ${ ({theme}) => theme.COLORS.TEXT };
  }

  > img {
    width: clamp(37px, 1px + 7vw, 50px);
  }

  @media(min-width: 900px) {
    margin: 0;
  }
`;

export const Main = styled.main`
  width: clamp(29.6rem, 100px + 65vw, 47.6rem);
  max-height: 63rem;
  padding: 6.4rem;
  border-radius: 1.6rem;
  background-color: ${ ({theme}) => theme.COLORS.BACKGROUND };

  margin: 9rem 0rem 10rem;
 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;

  > h2 {
    font: 500 clamp(19px, 3px + 5vw, 32px) "Poppins", sans-serif;
    color: ${ ({theme}) => theme.COLORS.TEXT };

    text-align: center;
  }
`;

export const Anchor = styled(Link)`
  font: 500 clamp(10px, 5px + 2vw, 14px) "Poppins", sans-serif;
  color: ${ ({theme}) => theme.COLORS.TEXT };

  text-decoration: none;
`;