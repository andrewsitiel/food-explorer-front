import styled from "styled-components";

export const Container = styled.div`
  > main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: space-between;
    gap: 7.5rem;

    padding-inline: 5rem;

    > section {
      > h3 {
        font-family: ${({ theme }) => theme.FONTS.TITLE};
        font-size: clamp(1.9rem, 0.3rem + 5vw, 3.2rem);
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.TEXT};
        
        margin-bottom: 3.2rem;
      }
      
      > h4 {
        font-family: ${({ theme }) => theme.FONTS.TITLE};
        font-size: clamp(2rem, 0.5rem + 2vw, 2.4rem);
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.TEXT};

        margin-top: 3rem;

      }
    }
  }

  @media(min-width: 900px) {
    > main {
      padding-inline:  clamp(7rem, 23px + 7vw, 12.3rem);
      flex-direction: row;
    }
  }
`;

export const EmptyOrder = styled.div`
  height: 84vh;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TEXT_TRANSPARENT};

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  h4 {
    font-size: 40px;
    text-align: center;
  }
`;