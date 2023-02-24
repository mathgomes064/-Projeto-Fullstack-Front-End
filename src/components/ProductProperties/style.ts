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
        display: flex;
        align-items: center;
        justify-content: center;

        width: 50px;
        height: 30px;

        color: var(--brand-1);
        font-size: 14px;
        font-weight: 600;

        background-color: var(--brand-4);
        border-radius: 4px;
    }

    .yearAndMilage{
        display: flex;
        justify-content: space-evenly;

        width: 25%;
    }
    .propertierBox{
        display: flex;
        flex-direction: column;
        
        justify-content: space-evenly;
        align-items: center;

        width: 100%;
        height: 100%;
    }
    .propertiesTop{
        display: flex;
        width: 100%;


        align-items: center;
        justify-content: center;

    }
    .propertiesBottom{
        display: flex;
        width: 83%;

    }
    .propertiesMiddle{
        width: 85%;
        display: flex;

        justify-content: space-between;
        align-items: center;
    }
    .yearAndMilage{
        display: flex;
    }
    .price{
        font-weight: 600;
    }
    button{
        background-color: var(--brand-1);
        color: var(--grey-10);

        font-size: 14px;
        font-weight: 600;
    }
` 