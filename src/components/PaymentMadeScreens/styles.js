import styled from "styled-components";

export const Container = styled.div`
grid-area: Content;

display: flex;
flex-direction: column;
align-items: center;
gap: 3.7rem;

text-align: center;

svg {
  font-size: 10rem;
  color: ${ ({theme}) => theme.COLORS.LABEL};
}

p {
  font-family: ${ ({theme}) => theme.FONTS.TEXT};
  font-weight: 400;
  font-size: clamp(2rem, 0.5rem + 2vw, 2.4rem);
  color: ${ ({theme}) => theme.COLORS.LABEL}; 
}`;