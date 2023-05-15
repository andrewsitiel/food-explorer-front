import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.6rem;

  > div {

    img {
      max-width: 5.3rem;
    }
  
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  
    > h4 {
      font-family: ${({theme}) => theme.FONTS.TITLE};
      font-size: clamp(1.2rem, 0.6rem+ 2vw, 1.8rem);
      font-weight: 400;
    }
  }
`;