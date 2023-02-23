import styled from "styled-components"

export const Container = styled.section`

    background-color: var(--grey-10);

    width: 600px;
    height: 150px;

    display: flex;
    align-items: center;

    font-family: 'Inter', sans-serif;
    color: var(--grey-1);

    .title{
        font-weight:600;
        font-size: 20px;
    }
    .littleBox{
        width: 50px;
        height: 20px;

        color: var(--brand-1);
        font-size: 16px;

        background-color: var(--brand-4);
        border-radius: 4px;
    }
    .propertierBox{
        display: flex;
        flex-direction: column;
        
        justify-content: space-evenly;


        width: 100%;
        height: 100%;
    }
    .propertiesTop{
        display: flex;
        width: 100%;

    }
    .propertiesBottom{
        display: flex;
        width: 100%;

    }
    .propertiesMiddle{
        width: 85%;
        display: flex;

        justify-content: space-between;
    }
    .yearAndMilage{
        display: flex;
    }
` 