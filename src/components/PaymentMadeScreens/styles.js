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
  font: 400 2.4rem "Roboto", sans-serif;
  color: ${ ({theme}) => theme.COLORS.LABEL}; 
}`;