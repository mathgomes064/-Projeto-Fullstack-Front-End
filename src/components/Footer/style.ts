import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #0b0d0d;
  position: relative;
  bottom: 0px;
  margin-top: 100px;
  img {
    width: 153px;
    height: 26px;
  }

  span {
    font-family: "Inter", sans-serif;
    color: var(--white);
    font-weight: 400;
  }

  a {
    background-color: var(--grey-1);
    border: none;
    color: white;
    padding: 10px 15px;
    border-radius: 4px;
    text-decoration: none;
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;
