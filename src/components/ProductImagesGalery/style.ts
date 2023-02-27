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

    justify-content: space-evenly;

    border-radius: 4px;

    margin-top: 20px;

    .galeryBox{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 90%;
    }

    .titleBox{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-left: 10%;

        width: 90%;
        height: 20%;

    }
   
    .galery{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-around;


        width: 80%;
        height: 80%;
    }
    img{
        width: 30%;
        height: 20%;
    }


` 