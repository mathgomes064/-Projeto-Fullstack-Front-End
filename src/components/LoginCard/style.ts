import styled from "styled-components";

export const Container = styled.section`
  padding: 44px 48px;
  background-color: #191B21;
  
  h1 {
    margin: 0;
    color: var(--white);
    font-size: 26px;
    font-weight: bold;
  }

  label{
    color: var(--white)
  }

  div > form > input{
    background-color: transparent;
    color: var(--white);
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
    cursor: pointer;
  }

  .password{
    cursor: pointer;
    color: var(--white)
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
        color: var(--white);

        ::placeholder{
          color: var(--white)
        }
    }

    .olhoAberto{
      color: var(--white)
    }

    input{
        width: 97%;
        height: 40px;
        background-color: transparent;
        outline: 0;
        border: 1px solid var(--white);
        border-radius: 4px;

        ::placeholder{
          color: var(--white)
        }
    }

  
`;
