import styled from "styled-components";

export const Sign = styled.section`
width: 100vw;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
font-family: -apple-system, BlinkMacSystemFont, sans-serif;
overflow: auto;
background: linear-gradient(315deg, #5126ea 3%, #b0a6f0 38%, rgba(48,238,226,1) 68%, #e34d8c 98%);
animation: gradient 15s ease infinite;
background-size: 400% 400%;
background-attachment: fixed;

    @keyframes gradient {
        0% {
            background-position: 0% 0%;
        }
        50% {
            background-position: 100% 100%;
        }
        100% {
            background-position: 0% 0%;
        }
    }

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
        color: var(--white);
    }

    .mainDiv > p{
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        color: var(--white);
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
        font-weight: 600;
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        color: var(--white);
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