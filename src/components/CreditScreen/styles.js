import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    justify-items: center;
    grid-template-areas: "CreditNumber CreditNumber" "CVC DATA"
    "Button Button";
    gap: 3.7rem;

    padding: 0rem 3rem;

    > div:nth-child(1){
      grid-area: CreditNumber;
    }

    > div:nth-child(2){
      grid-area: CVC;
    }

    > div:nth-child(3){
      grid-area: DATA;
    }

    > button:nth-child(4){
      grid-area: Button;
    }
`;