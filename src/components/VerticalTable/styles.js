import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  margin: auto;

  text-align: left;
  
  font-family: ${({theme}) => theme.FONTS.TEXT};
  font-size: clamp(1rem, 0.3rem + 2vw, 1.4rem);
  font-weight: 400;
  color: ${ ({theme}) => theme.COLORS.TEXT };

  border-radius: 6px 6px 0px 0px;

  &, th, td {
    border: 1px solid ${ ({theme}) => theme.COLORS.TEXT_TRANSPARENT };
    border-spacing: 0rem;
  }

  th {
    padding: 2.1rem 2rem 2.1rem 2.4rem;

    &:first-child {
      border-top-left-radius: 5px;
    };

    &:last-child {
      border-top-right-radius: 5px;
    } 
  }

  td {
    padding: 1.6rem 2rem 1.6rem 2.4rem;
    position: relative;
  }

> tr {
  border-bottom-color: white;
}
`;