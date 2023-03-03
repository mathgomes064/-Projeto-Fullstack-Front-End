import styled from "styled-components"

export const ProductPage = styled.section`
    
    

    background-color: var(--grey-10);
   
    .blueStrip{
        width: 100vw;
        height: 450px;


        background-color: var(--brand-1);

    }
    .body{
        
        
        display: flex;
    
        top: 20px;
    }

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