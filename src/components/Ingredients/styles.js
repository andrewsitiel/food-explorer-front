import styled from "styled-components";

export const Container = styled.div`
  width: max-content;
  display: flex;
  gap: 1.6rem;

  > div {

    img {
      max-width: 5.3rem;
    }
  
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  
    > h4 {
      font: ${ ({theme}) => theme.FONTS.INGREDIENT };
    }
  }
`;