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
        height: 410px;
        margin: 0px 10px 0px 10px;
        
        :hover{
            border-bottom: 5px solid #4529e6;
        }
    }

    .card > .imgDiv{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--grey-7);
        overflow: hidden;
        text-align: center;
    }

    .card > .imgDiv > img{
        width: 100%;
        height: 150px;
        background-color: var(--grey-7);
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;

        :hover{
            -moz-transform: scale(1.4);
            -webkit-transform: scale(1.4);
            transform: scale(1.4);
        }
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
        width: 95%;
        height: 50%;
        font-size: 16px;
        font-weight: bold;
        color: black;
        text-align: start;
        display: flex;
        align-items: center;
    }

    .card > .divOne > p{
        width: 95%;
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
        width: 95%;
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

    .card > .divFourth{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .card > .divFourth > .edit{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 105px;
        border: none;
        background-color: transparent;

        :hover{
            transition: all 0.4s;
            background-color: white;
            color: var(--white);
            border: none;
        }
    }

    .card > .divFourth > .delete{
        background-color: var(--white);
        color: var(--brand-1);
        border: 1.5px solid var(--brand-1);
        border-radius: 4px;
        font-weight: bold;
        height: 40px;
        width: 90px;

        :hover{
            transition: all 0.4s;
            background-color: red;
            border: 1.5px solid var(--brand-1);
            border: none;
            color: var(--white);
        }

    }  
`