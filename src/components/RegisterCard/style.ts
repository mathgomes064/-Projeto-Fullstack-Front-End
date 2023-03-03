import styled from "styled-components";

export const Container = styled.section`
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

  div > form > div > div > input{
    background-color: transparent;
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

  
`;