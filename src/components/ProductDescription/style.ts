import styled from "styled-components"

export const Container = styled.section`

    background-color: var(--grey-10);

    width: 600px;
    height: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: 'Inter', sans-serif;
    color: var(--grey-1);

    border-radius: 4px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    
        width: 90%;
        height: 100%;
    }

    h1 {
        font-size:16px;
        font-weight: 600;
        text-align: left;
    }

    p {
        font-size: 13px;
        line-height: 150%;
    }
 
` 