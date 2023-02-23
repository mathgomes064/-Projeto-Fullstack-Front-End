import styled from "styled-components";

export const Sign = styled.section`
width: 100vw;
height: 500px;
background-color: var(--brand-2);
display: flex;
justify-content: center;
align-items: center;

    .mainDiv{
        width: 50%;
        height: 300px;
        gap: 35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .mainDiv > h1{
        font-size: 44px;
        font-weight: bold;
        text-align: center;
    }

    .mainDiv > p{
        font-size: 16px;
    }

    .mainDiv > div{
        width: 400px;
        height: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .mainDiv > div > button{
        width: 182px;
        height: 48px;
        border-radius: 4px;
        border: 1px solid var(--white);
        background-color: transparent;
        font-weight: bold;

        :hover{
            background-color: var(--white);
            color: var(--black);
            transition: 144ms;
        }
    }

    @media (max-width: 425px) {

        .mainDiv{
            width: 80%;
            height: 400px;
            gap: 35px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .mainDiv > div{
            width: 400px;
            height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        .mainDiv > p{
            font-size: 16px;
            text-align: center;
        }

        .mainDiv > div > button{
        width: 80%;
        height: 48px;
        border-radius: 4px;
        border: 1px solid var(--white);
        background-color: transparent;
        font-weight: bold;

        :hover{
            background-color: var(--white);
            color: var(--black);
            transition: 144ms;
        }
    }
  }
`