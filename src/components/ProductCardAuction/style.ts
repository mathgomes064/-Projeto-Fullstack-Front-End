import styled, { keyframes } from "styled-components";
import background from "../../assets/backgroundcardauction.svg";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-bottom: 25px;
`;

export const Container = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 40px;

  .specifications {
    display: flex;
    flex-direction: row;
  }

  .year {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 32px;
    background: #edeafd;
    border-radius: 4px;
    color: #4529e6;
  }

  .kilometers {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 32px;
    background: #edeafd;
    border-radius: 4px;
    color: #4529e6;
    margin-left: 12px;
  }

  .body {
    max-width: 555px;
    height: auto;
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
      color: #ced4da;
      margin-bottom: 24px;
    }
  }

  .body:hover {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, #000000 100%);
  }
  .profile {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

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

  .footerCard {
    background: #4529e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 555px;
    height: 40px;
    padding-left: 30px;
    padding-right: 30px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .timer {
    width: 123px;
    height: 36px;
    background: #ffffff;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0px 30px 0px;

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

  @media (max-width: 375px) {
    width: 285px;
    height: 435px;
    background-size: 275px;
    background-repeat: no-repeat;
    span {
      font-size: 10px;
    }
  }
`;
