import styled from "styled-components";


export const EditProfileButton = styled.a`
`

export const Content = styled.div`
width: 400px;
height: 700px;
padding: 20px;
background-color: white;

    form{
    display: flex;
    align-items: center;
    justify-content: center;
    }

  .headerForm{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .closeButton{
        cursor: pointer;
    }
  }

  h3{
    width: 100%;
  }

  label{
    width: 100%;
  }

  input {
    width: 97%;
    background-color: white;
    border: 0.5px solid gray;
    outline: 0;
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

  .footerButtons{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    background-color: white;
    border: 1px solid var(--grey-4);
    border-radius: 4px;
    color: var(--grey-0);
    width: 228px;
    height: 48px;
    cursor: pointer;
  }

  .close{
    width: 45%;

    :hover{
        background-color: red;
        color: white;
    }
    
  }

  .update{
    width: 45%;
    :hover{
        background-color: var(--brand-2);
        color: white;
    }
  }
`;