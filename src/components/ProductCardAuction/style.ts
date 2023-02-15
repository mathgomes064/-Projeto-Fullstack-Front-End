import styled, { keyframes } from "styled-components";
import background from "../../assets/backgroundcardauction.svg";

export const Container = styled.div`
  background-image: url(${background});
  background-position: center;
  width: 735px;
  height: 326px;

  .body {
    width: 735px;
    height: 326px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    border-radius: 3px;

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 16px;
    }

    .description {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: #CED4DA;
      margin-bottom: 24px;
      margin-right: 100px;
    }
  }

  .body:hover {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, #000000 100%);
  }
  .profile {
    display: flex;
    margin-left: 65px;
    align-items: center;

    .iconProfile {
      margin-right: 16px;
      background: #4529e6;
      border-radius: 150px;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .timer {
    width: 123px;
    height: 36px;
    background: #ffffff;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0px 69px 36px;

    span {
      color: #212529;
      margin-left: 14px;
    }
  }

  button {
    background: none;
    width: 735px;
    height: 62px;
    background: #4529e6;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;

    img {
      margin-left: 470px;
    }
  }
`;
