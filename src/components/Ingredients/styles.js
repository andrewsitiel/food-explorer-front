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
      font: 400 clamp(12px, 6px + 2vw, 18px) "Poppins", sans-serif;
    }
  }
`;