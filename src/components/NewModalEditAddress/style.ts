import styled from "styled-components";


export const EditAddressButton = styled.a`
color: var(--white);
font-size: 16px;
text-decoration: none;
position: relative;
height: 20px;
font-weight: bold;
font-family: "Inter", sans-serif;
cursor: pointer;
::after {
      content: " ";
      width: 0%;
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.3s ease-in-out;
    }

    :hover::after {
      width: 100%;
      background-image: linear-gradient(to bottom right, #ffff, #ffff);
    }
`
export const Content = styled.div`
width: 400px;
height: 500px;
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

    .flexDiv{
    width: 100%;
    display: flex;
    justify-content: space-between;

    }

  .divVehicle-1 {
    width: 45%;
    display: flex;
    flex-direction: column;

    input{
        width: 95%;
    }
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