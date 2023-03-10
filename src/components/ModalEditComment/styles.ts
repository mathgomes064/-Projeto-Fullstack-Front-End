import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: auto;
  
  background: none;

  form {
    
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    gap: 20px;

    .headerForm {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .closeButton {
        cursor: pointer;
        color: var(--grey-4);
        width: 20px;
        height: 20px;
      }
    }

  }
  `

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
    justify-content: center;
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

  .divVehicle-1 {
    display: flex;
    flex-direction: column;
  }

  .divVehicle-2,
  .divVehicle-3 {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
`;
