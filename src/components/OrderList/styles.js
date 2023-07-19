import styled from "styled-components";

export const Container = styled.ul`
  max-height: 424px;
  overflow-y: auto;

> li {
  list-style: outside;

  display: flex;
  align-items: center;
  gap: 1.3rem;

  margin-bottom: 1.6rem;

  > img {
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 50%;
    }

  > div {
    > button {
      background: none;
      border: none;

      font-family: ${({ theme }) => theme.FONTS.TEXT};
      font-size: clamp(1rem, 0.1rem + 3vw, 1.4rem);
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.BUTTON_LIGHT};
      
      cursor: pointer;
      }

    > div {
      display: flex;
      align-items: center;
      gap: 1rem;
    
    > h4 {
      font-family: ${({ theme }) => theme.FONTS.TITLE};
      font-size: clamp(2rem, 0.5rem + 2vw, 2.4rem);
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.TEXT};
      }
    
    > span {
      font-family: ${({ theme }) => theme.FONTS.TEXT};
      font-size: clamp(1rem, 0.1rem + 3vw, 1.4rem);
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LABEL};
      }
    }
  }
}
`;