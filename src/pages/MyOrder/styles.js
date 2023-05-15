import styled from "styled-components";

export const Container = styled.div`
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: space-between;
    gap: 7.5rem;

    padding-inline: 5rem;

    > section {
      > h3 {
        font-family: ${({theme}) => theme.FONTS.TITLE};
        font-size: clamp(1.9rem, 0.3rem + 5vw, 3.2rem);
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.TEXT};
        
        margin-bottom: 3.2rem;
      }
      
      > h4 {
        font-family: ${({theme}) => theme.FONTS.TITLE};
        font-size: clamp(2rem, 0.5rem + 2vw, 2.4rem);
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.TEXT};
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

export const ListItem = styled.li`
  list-style: outside;
  
  display: flex;
  align-items: center;
  gap: 1.3rem;

  margin-bottom: 1.6rem;

  > img {
    width: 7.2rem;
    height: 7.2rem;
  }

  > div {
    > button {
      background: none;
      border: none;

      font-family: ${({theme}) => theme.FONTS.TEXT};
      font-size: clamp(1rem, 0.1rem + 3vw, 1.4rem);
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.BUTTON_LIGHT};
      
      cursor: pointer;
    }

    > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    > h4 {
      font-family: ${({theme}) => theme.FONTS.TITLE};
      font-size: clamp(2rem, 0.5rem + 2vw, 2.4rem);
      font-weight: 500;
      color: ${({theme}) => theme.COLORS.TEXT};
    }
    
    > span {
      font-family: ${({theme}) => theme.FONTS.TEXT};
      font-size: clamp(1rem, 0.1rem + 3vw, 1.4rem);
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.LABEL};
    }
  }
  }
`;