import styled from "styled-components";

const statusColors = {
  "Pendente": "#AB222E",
  "Preparando": "#FBA94C",
  "Entregue": "#04D361"
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  position: relative;
  
  padding: 1.9rem 1rem 1.9rem 3.1rem;
  border: 1px solid  ${ ({theme}) => theme.COLORS.TEXT_TRANSPARENT };
  border-radius: 5px;

  cursor: pointer;

  &:before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: ${({orderStatus}) => statusColors[orderStatus]}
  }

 svg {
  font-size: 2rem;
 }
`;

export const Menu = styled.menu`
  visibility: ${ ({isMenuOpen}) => isMenuOpen ? "visible" : "hidden" };

  background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_LIGHT };
  padding: 1rem 0rem;
  border-radius: 0px 0px 5px 5px;

  position: absolute;
  top: 70%;
  right: 7%;
  z-index: ${ ({isMenuOpen}) => isMenuOpen ? "10" : "-100"};

  > span {
    display: block;
    padding: 0.5rem 3rem;

    &:hover {
      background-color: ${ ({theme}) => theme.COLORS.BACKGROUND };
    }

    cursor: pointer;
  }
`;