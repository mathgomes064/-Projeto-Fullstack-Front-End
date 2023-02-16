import styled from "styled-components"

export const CarSection = styled.section`
width: 100vw;
height: 400px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;

    .container{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        width: 100%;
        height: 390px;
        background-color: gray;
        overflow-x: auto;

        ::-webkit-scrollbar{
        background-color: #1d1d1d;
        width: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        }
        ::-webkit-scrollbar-thumb{
        background-color: #5B5B5B;
        border-radius: 5px;
        }
    }

    .card{
        background-color: white;
        min-width: 300px;
        height: 350px;
        margin: 0px 10px 0px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    .card > .imgDiv{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #E9ECEF;
    }

    .card > .imgDiv > img{
        width: 170px;
        height: 150px;
        background-color: #E9ECEF;
    }
    
    .card > .divOne{
        width: 95%;
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card > .divOne > h1{
        font-size: 16px;
        font-weight: bold;
        color: black;
        text-align: center;
    }

    .card > .divOne > p{
        font-size: 14px;
        color: #495057;
        text-align: justify;
    }

    .card > .divTwo{
        width: 95%;
    }

    .card > .divTwo > div{
        width: 120px;
        height: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card > .divTwo > div > p{
        font-size: 14px;
        color: #495057;
    }

    .card > .divTwo > div > img{
        width: 32px;
        height: 32px;
        border-radius: 100%; 
    }

    .card > .divTwo > div > p{
        font-size: 14px;
        color: #495057;
    }

    .card > .divTree{
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card > .divTree > div{
        width: 113px;
        height: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card > .divTree > div > span{
        width: 50px;
        height: 32px;
        border-radius: 4px;
        background-color: #EDEAFD;
        color: #4529E6;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card > .divTree > p{
        font-size: 16px;
        color: #212529;
        font-weight: bold;
    }
`