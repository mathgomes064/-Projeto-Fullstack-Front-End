import styled from "styled-components";

export const Container = styled.section`
  padding: 44px 48px;

  div > form > input{
    background-color: transparent;
  }

  h1 {
    margin: 0;
  }
  a {
    display: flex;
    justify-content: end;
    margin-top: 11px;
  }

  p {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }

  #wrapper-button {
    width: 350px;
  }

  button {
    margin-top: 25px;
    width: 100%;

  }
  .Password{
    cursor: pointer;
  }

  .divInput{
        display: flex;
        justify-content: start;
        align-items: center;
        width: 96%;
        height: 40px;
        background-color: transparent;
        outline: 0;
        padding-left: 10px;
        color: black;
        border: 1px solid #adb5bd;
        border-radius: 4px;

        ::placeholder{
        }
    }

    .divInput > input{
        height: 80%;
        width: 90%;
        background-color: transparent;
        outline: 0;
        border: none;

        ::placeholder{
        }
    }

    input{
        width: 97%;
        height: 40px;
        background-color: transparent;
        outline: 0;
        border: 1px solid #adb5bd;
        border-radius: 4px;

        ::placeholder{
        }
    }

  
`;
