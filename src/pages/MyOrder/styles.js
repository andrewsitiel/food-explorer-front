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
        font: 500 clamp(19px, 3px + 5vw, 32px) "Poppins", sans-serif;
        color: ${({theme}) => theme.COLORS.TEXT};
        
        margin-bottom: 3.2rem;
      }
      
      > h4 {
        font: 500 clamp(20px, 5px + 2vw, 24px) "Poppins", sans-serif;
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

      font: 400 clamp(10px, 1px + 3vw, 14px) "Roboto", sans-serif;
      color: ${({theme}) => theme.COLORS.BUTTON_LIGHT};
      
      cursor: pointer;
    }

    > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    > h4 {
      font:500 clamp(20px, 5px + 2vw, 24px) "Poppins", sans-serif;
      color: ${({theme}) => theme.COLORS.TEXT};
    }
    
    > span {
      font: 400 clamp(10px, 1px + 3vw, 14px) "Roboto", sans-serif;
      color: ${({theme}) => theme.COLORS.LABEL};
    }
  }
  }
`;