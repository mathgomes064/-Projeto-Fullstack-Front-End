import styled from "styled-components";

export const ModalButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 40px;
width: 70px;

background-color: var(--white);
color: var(--brand-1);
border: 1.5px solid var(--brand-1);
border-radius: 4px;
font-weight: bold;

:hover{
    transition: all 0.4s;
    background-color: #5126ea;
    border: 1.5px solid var(--brand-1);
    border: none;
    color: var(--white);
}
`;

export const Container = styled.div`
width: 500px;
height: 100vh;
overflow-y: auto;
background-color: var(--white);
display: flex;
justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: gray; */
    gap: 20px;

    .headerForm {
      width: 100%;
      color: black;
    }

    h3{
      width: 100%;
      color: black;
    }

    label{
      width: 100%;
      color: black;
      
    }

    input{
      width: 100%;
    }
  }

  .saleType {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height:80px;

    h3{
      width: 100%;
      color: black;
    }

    .saleButtons {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 48px;

      .notSelected {
        background-color: var(--brand-4);
        color: var(--grey-0);
        font-size: 16px;
        font-weight: 600;
        border: 0.14rem solid var(--grey-4);
        border-radius: 4px;
        width: 45%;
        height: 48px;
        &:hover {
          background-color: var(--brand-1);
          color: var(--brand-4);
          border: none;
        }
      }
      .selected {
        background-color: var(--brand-1);
        color: var(--brand-4);
        font-size: 16px;
        font-weight: 600;
        border: none;
        border-radius: 4px;
        width: 45%;
        height: 48px;
        &:hover {
          background-color: var(--brand-3);
          color: var(--brand-4);
          border: none;
        }
      }
    }
  }

  .vehicleType {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 100%;

    .vehicleButtons {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .notSelected {
        background-color: var(--brand-4);
        color: var(--grey-0);
        font-size: 16px;
        font-weight: 600;
        border: 0.14rem solid var(--grey-4);
        border-radius: 4px;
        width: 45%;
        height: 48px;
        &:hover {
          background-color: var(--brand-1);
          color: var(--brand-4);
          border: none;
        }
      }
      .selected {
        background-color: var(--brand-1);
        color: var(--brand-4);
        font-size: 16px;
        font-weight: 600;
        border: none;
        border-radius: 4px;
        width: 45%;
        height: 48px;
        &:hover {
          background-color: var(--brand-3);
          color: var(--brand-4);
          border: none;
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  height: 1300px;
  padding: 20px;

  button {
    background-color: white;
    border: 2px solid var(--grey-4);
    color: var(--grey-0);
    width: 228px;
    height: 48px;
  }

  input {
    background-color: white;
  }

  .vehicleInformation {
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;

    input {
      width: 58px;
    }
  }
  .imageField{
    display: flex;
    flex-direction: column;
  }
  .vehicleInformationLabel {
    display: flex;
    flex-direction: row;
  }

  .divVehicle{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 90px;

    input{
      width: 98%;
    }
  }
  
  .imageField{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 90px;

    input{
      width: 98%;
    }
  }

  .divVehicle-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    display: flex;
    flex-direction: column;

      input{
        width: 90%;
      }
  }


  .divVehicle-2{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    display: flex;
    flex-direction: column;

      input{
        width: 90%;
      }
  }

  .divVehicle-3 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    display: flex;
    flex-direction: column;

      input{
        width: 90%;
      }
  }

  .addButton{
    width: 100%;
     &:hover {
        background-color: var(--brand-1);
        color: var(--brand-4);
        border: none;
    }
  }

  .footerButtons{
    width: 100%;
    display: flex;
    justify-content: space-between;

      button{
        width: 45%;;
        &:hover {
        background-color: var(--brand-1);
        color: var(--brand-4);
        border: none;
    }

      }
  }
`;
