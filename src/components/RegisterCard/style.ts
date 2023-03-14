import styled from "styled-components";

export const Container = styled.section`
  background-color: #191B21;
  div > form > input{
    background-color: transparent;
    outline: 0;
  }

  div > form > input::-webkit-outer-spin-button,
  div > form > input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  div > form > div{
  }

  input{
    color: white;
    ::placeholder{
      color: white;
    }
  }

  div > form > div > div > input{
    background-color: transparent;

    ::placeholder{
      color: white;
    }
  }

 label{
  color: white;
 }

  .error{
    color: red;
    height: 25px;
    display: flex;
    align-items: center;
  }

  .stateAndCity{
    display: flex;
    justify-content: space-between;

    div{
      width: 45%;
    }
  }

  .numberAndComplement{
    display: flex;
    justify-content: space-between;

    div{
      width: 45%;
    }
  }

  padding: 44px 48px;

  h1 {
    margin: 0;
  }

  h2 {
    margin-top: 32px;
  }

  p {
    display: flex;
    margin-top: 25px;
  }

  .wrapper-button {
    display: flex;
    justify-content: space-between;

    button{
      width: 45%;
    }
  }

  button {
    margin-top: 25px;
    width: 100%;
  }

  #wrapper-endereco {
    input {
        width: 130px;
    }
    display: flex;
    flex-direction: row;
  }

  #wrapper-endereco-info {
    display: flex;
    flex-direction: column;
    
  }

  #wrapper-estado {
    display: flex;
    flex-direction: column;
  }

  #wrapper-button {
    display: flex;
    flex-direction: row;
    
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
        color: white;
        border: 1px solid #adb5bd;
        border-radius: 4px;
        margin-top: 40px;

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

    .divInput-2{
        display: flex;
        justify-content: start;
        align-items: center;
        width: 96%;
        height: 40px;
        background-color: transparent;
        outline: 0;
        padding-left: 10px;
        color: white;
        border: 1px solid #adb5bd;
        border-radius: 4px;
        margin-top: 40px;


        ::placeholder{
        }
    }

    .divInput-2 > input{
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