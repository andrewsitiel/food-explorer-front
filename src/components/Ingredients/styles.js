import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.6rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  
    background-color: ${({ theme }) => theme.COLORS.TEXT_TRANSPARENT};
    border-radius: 3px;
    padding: 5px;
    > h4 {
      font-family: ${({ theme }) => theme.FONTS.TITLE};
      font-size: clamp(1.2rem, 0.6rem + 2vw, 1.8rem);
      font-weight: 400;

    }
  }
`;