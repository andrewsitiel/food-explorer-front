import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  
  .swiper > button {
    position: absolute;
    top: 0;
    z-index: 10;

    width: clamp(3rem, 1rem +  13vw, 6.6rem);
    height: 100%;
    border: none;

    cursor: pointer;
    
    > svg {
      font-size: 3.7rem;
      color: ${({ theme, isDeadEndSwiper }) => isDeadEndSwiper ? theme.COLORS.BACKGROUND : theme.COLORS.TEXT};
    }
  }

  .swiper-slide {
    width: auto;
  }
`;