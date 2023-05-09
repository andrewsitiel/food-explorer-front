import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  
  .swiper > button {
    position: absolute;
    top: 10%;
    z-index: 10;

    width: clamp(3rem, 1rem + 7vw ,11.6rem);
    height: 80%;
    border: none;

    cursor: pointer;
    
    > svg {
      font-size: 3.7rem;
      color: ${({theme, isDeadEndSwiper}) => isDeadEndSwiper ? theme.COLORS.BACKGROUND : theme.COLORS.TEXT };
    }
  }

  .swiper-slide {
    width: auto;
  }
`;