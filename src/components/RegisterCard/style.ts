import styled from "styled-components";

export const Container = styled.section`
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

  #wrapper-button {
    width: 350px;
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