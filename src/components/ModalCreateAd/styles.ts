import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: auto;
  background: none;

  form {
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 450px;

    gap: 20px;

    .headerForm {
      display: flex;
      justify-content: space-between;
      width: 90%;

      .closeButton {
        cursor: pointer;
        color: var(--grey-4);
        width: 20px;
        height: 20px;
      }
    }
  }

  .saleType {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;

    h3{
      width: 100%;
    }
    .saleButtons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      height: 48px;
      .notSelected {
        background-color: var(--brand-4);
        color: var(--grey-0);
        font-size: 16px;
        font-weight: 600;
        border: 0.14rem solid var(--grey-4);
        border-radius: 4px;
        width: 100%;
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
        width: 100%;
        height: 48px;
        &:hover {
          background-color: var(--brand-3);
          color: var(--brand-4);
          border: none;
        }
      }
    }
  }

  h3{
    width: 90%;
  }

  .mainLabel{
    width: 90%;
  }

  .tittleInput{
    width: 90%;
  }

  .descriptionInput{
    width: 90%;
  }

  .vehicleType {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 1rem;
    padding: 1rem;
    .vehicleButtons {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      width: 100%;
      height: 48px;
      .notSelected {
        background-color: var(--brand-4);
        color: var(--grey-0);
        font-size: 16px;
        font-weight: 600;
        /* border: 0.14rem solid var(--grey-4); */
        border-radius: 4px;
        width: 100%;
        height: 48px;
        border: none;
      }
      .selected {
        background-color: var(--brand-1);
        color: var(--brand-4);
        font-size: 16px;
        font-weight: 600;
        border: none;
        border-radius: 4px;
        width: 100%;
        height: 48px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: flex-start;
  width: auto;
  padding: 20px;
  background-color: white;

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
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    input {
      width: 58px;
    }
  }
  .imageField{
    display: flex;
    flex-direction: column;
    width: 90%;

    input{
      width: 97.5%;
    }

  }
  .vehicleInformationLabel {
    display: flex;
    flex-direction: row;
  }

  .divVehicleImage {
    display: flex;
    flex-direction: column;
    width: 90%;

    input{
      width: 97.5%;
    }

  }

  .divVehicle-1{
    display: flex;
    flex-direction: column;
    width: 30%;

    input{
      width: 110px;
    }
  }

  .divVehicle-2{
    display: flex;
    flex-direction: column;
    width: 30%;

    input{
      width: 110px;
    }
  }

  .divVehicle-3 {
    display: flex;
    flex-direction: column;
    width: 30%;

    input{
      width: 110px;
    }
    
  }

  .addImageDiv{
    width: 90%;
    display: flex;
    justify-content:  center;
    align-items: center;
  }

  .addImage{
    width: 100%;
    background-color: #EDEAFD;
    color: #4529E6;
    border: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footerButtons{
    width: 90%;
    display: flex;
    justify-content: space-between;

    .cancelButton{
      width: 49%;
      font-size: 14px;
      border: none;
      background-color: #DEE2E6;
      color: #495057;
    }

    .createButton{
      width: 49%;
      font-size: 14px;
      border: none;
      background-color: #4529E6;
      color: #EDEAFD;
    }
  }
`;
