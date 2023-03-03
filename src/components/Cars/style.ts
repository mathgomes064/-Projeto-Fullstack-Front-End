import styled from "styled-components"

export const CarSection = styled.section`
width: 94vw;
height: 500px;
margin-top: 100px;

cursor: pointer;

    .tittleDiv{
        width: 94vw;
        height: 100px;
        display: flex;
        align-items: center
    }

    .tittleDiv > h1{
        font-size: 24px;
        color: var(--black);
        margin-left: 10px;
        font-weight: bold;
    }

    .card{
        background-color: var(--white);
        max-width: 300px;
        height: 370px;
        margin: 0px 10px 0px 10px;
    }

    .card > .imgDiv{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--grey-7);
    }

    .card > .imgDiv > img{
        width: 100%;
        height: 150px;
        background-color: var(--grey-7);
    }
    
    .card > .divOne{
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .card > .divOne > h1{
        width: 97%;
        height: 50%;
        font-size: 16px;
        font-weight: bold;
        color: black;
        text-align: start;
        display: flex;
        align-items: center;
    }

    .card > .divOne > p{
        width: 97%;
        height: 50%;
        font-size: 14px;
        color: var(--grey-2);
        text-align: justify;   
        display: flex;
        align-items: center; 
    }

    .card > .divTwo{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card > .divTwo > div{
        width: 97%;
        height: 32px;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .card > .divTwo > div > img{
        width: 32px;
        height: 32px;
        border-radius: 100%;
        margin: 0px 5px 0px 0px 
    }

    .card > .divTwo > div > p{
        font-size: 14px;
        color: var(--grey-2);
        margin: 0px 5px 0px 5px 
    }


    .card > .divTwo > div > p{
        font-size: 14px;
        color: var(--grey-2);
    }

    .card > .divTree{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card > .divTree > div{
        width: 97%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card > .divTree > div > div{
        width: 170px;
        height: 32px;
        display: flex;
        justify-content: space-between;
    }

    .card > .divTree > div > div > span{
        width: 80px;
        height: 32px;
        border-radius: 4px;
        background-color: var(--brand-4);
        color: var(--brand-1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }

    .card > .divTree > div > p{
        font-size: 16px;
        color: var(--grey-0);
        font-weight: bold;
    }
`