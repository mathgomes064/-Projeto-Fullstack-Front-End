import styled from "styled-components"

export const Container = styled.section`

`

export const ProductPage = styled.section`
    
    background-color: var(--grey-10);
   
    .blueStrip{
        width: 100vw;
        height: 450px;
        background: linear-gradient(315deg, #5126ea 3%, #b0a6f0 38%, rgba(48,238,226,1) 68%, #e34d8c 98%);
        animation: gradient 15s ease infinite;
        background-size: 400% 400%;
        background-attachment: fixed;
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