import styled from "styled-components"

export const Container = styled.section`

background-color: var(--grey-10);

    width: 400px;
    height: 350px;

    display: flex;
    flex-direction: column;

    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: var(--grey-1);

    align-items: center;
    justify-content: space-evenly;

    h1{
        text-align: left;
    }
    .galery{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        width: 80%;
        height: 80%;
    }
    img{
        width: 30%;
        height: 24%;
    }


` 