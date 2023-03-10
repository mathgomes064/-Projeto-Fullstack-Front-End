import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: auto;
  background: none;

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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: flex-start;
  width: 520px;
  height: 229px;
  padding: 20px;
  background-color: white;
  h2{
    margin-bottom: 80px;
  }
  p{
    margin-bottom:20px ;
  }
`;
