import styled from "styled-components"

export const ProductPage = styled.section`
    background-image: linear-gradient(to bottom, blue 0, var(--brand-2) 30%, var(--grey-5) 70%);

    display: flex;
    
    top: 20px;

    .productPageright{
        display: flex;
        flex-direction: column;

        width: 65%;

        align-items: center;
        justify-content: center;

        gap:15px;
    }

    .productPageleft{
        display: flex;
        flex-direction: column;

        width: 45%;

    }
`