import styled, { keyframes } from "styled-components";

export const HeadeMain = styled.header`
  width: 100vw;
  height: 60px;
  background-color: var(--grey-10);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191B21;

  .container {
    width: 95%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      cursor: pointer;
    }
  }

  .buttonSection {
    width: 50%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .productLinks {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 60px;
  }

  .productLinks > a {
    color: var(--white);
    font-size: 16px;
    text-decoration: none;
    position: relative;
    height: 20px;
    font-weight: bold;
    font-family: "Inter", sans-serif;
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
  }

  .buttons {
    display: flex;
    align-items: center;
    width: 50%;
    height: 60px;
    border-left: 1px solid var(--grey-6);
    
  }

  .register-button {
    border: 1px solid var(--grey-4);
    background-color: transparent;
    padding: 10px;
    border-radius: 5px;
    color: var(--white);
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    font-family: "Inter", sans-serif;

    :hover{
      background-color: var(--brand-2);
      transition: 144ms;
      border: none;
    }
  }

  .login-button {
    position: relative;
    margin: 0px 23px;
    border: none;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    background-color: transparent;
    color: var(--white);
    ::after {
      content: " ";
      width: 0%;
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.5s ease-in-out;
    }

    :hover::after {
      width: 100%;
      background-image: linear-gradient(to bottom right, #ffff, #ffff);
    }
  }

  .dropdown {
    color: black;
  }

  .userInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 60px;
    border-left: 1px solid var(--grey-6);
  }

  .userInfo > div {
    width: 70%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .userInfo > div > .userImg {
    width: 42px;
    height: 42px;
    border-radius: 100px;
  }

  .userInfo > div > h1 {
    color: var(--white);
    font-size: 17px;
    text-decoration: none;
    position: relative;
    height: 20px;
    cursor: pointer;

    ::after {
      content: " ";
      width: 0%;
      height: 2px;
      background-color: var(--grey-2);
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.3s ease-in-out;
    }

    :hover::after {
      width: 100%;
      background-image: linear-gradient(to bottom right, #ffff, #ffff);
    }
  }

  .profilePic {
    background-image: linear-gradient(to bottom right, #5126ea, #b0a6f0);
    width: 45px;
    height: 45px;
    border-radius: 50px;
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
  }

  .profilePic > img {
    width: 35px;
  }

  .userDropDown {
    position: absolute;
    right: 2rem;
    top: 2.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 250px;

    background-color: var(--grey-9);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    color: var(--grey-2);
    font-weight: 400;
    font-size: 14px;
  }

  ol {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }

  .options {
    color: var(--grey-2);
    font-size: 16px;
    text-decoration: none;
    position: relative;
    height: 20px;
    cursor: pointer;

    ::after {
      content: " ";
      width: 0%;
      height: 2px;
      background-color: var(--grey-2);
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.3s ease-in-out;
    }

    :hover::after {
      width: 100%;
      background-image: linear-gradient(to bottom right, #5126ea, #b0a6f0);
    }
  }

  .dropdown {
    display: none;
  }

  @media screen and (max-width: 1083px) {
    .buttonSection {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .dropdown {
      font-size: 28px;
      display: flex;
    }

    .productLinks {
      display: none;
    }

    .buttons {
      display: none;
    }

    .userInfo {
      display: none;
    }

    .userItemsDropDown {
      position: absolute;
      right: 2rem;
      top: 2.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 170px;
      height: 200px;

      background-color: var(--grey-9);
      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
      border-radius: 4px;

      color: var(--grey-2);
      font-weight: 400;
      font-size: 14px;
    }

    .userItemsDropDown > ol {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .userItemsDropDown > ol > li {
      width: 150px;
      height: 30px;
      text-align: start;
    }

    .userItemsDropDown > ol > .upperLine {
      width: 170px;
      border-top: 1px solid var(--grey-4);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .userItemsDropDown > ol > .upperLine > a {
      width: 160px;
      color: var(--grey-2);
    }

    .userItemsDropDown > ol > button {
      width: 90%;
      background-color: transparent;
      border: 1px solid var(--grey-4);
      color: var(--black);
      border-radius: 4px;
      font-weight: bold;
    }
  }
`;

export const Container = styled.div`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #191B21;
  color: black;
  gap: 30px;
  border: none;

  .outsideDiv {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

  }
  
  .pictureAndOptions{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50%;
    
    .profilePic {
      background-image: linear-gradient(to bottom right, #5126ea, #b0a6f0);
      width: 85px;
      height: 85px;
      border-radius: 50px;
      color: var(--white);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: left;
      font-family: "Inter", sans-serif;
      font-size: 15px;
      font-weight: 500;
      text-align: center;
    }
  }

  .upperDiv {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: var(--white);

    div{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 70%;
      height: 30px;

      div{
        width: auto;
        
        a{
          margin-left: 10px;
        }

      }
    }
  }

  .lowerDiv {
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white);

    div{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 70%;
      height: 30px;

      div{
        width: auto;
        
        a{
          margin-left: 10px;
        }

      }
    }
  }

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 30px;
    text-align: center;
    color: var(--white);
    font-size: 16px;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    font-weight: bold;

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
  }

  .profile{
    margin-bottom: 4.5px;
  }

  .address{
    margin-bottom: 4.5px;
  }
`;