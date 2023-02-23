import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 350px;
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
  height: 250px;
  padding: 20px;
  background-color: white;
  h2{
    margin-bottom: 80px;
  }
  p{
    margin-bottom:20px ;
  }
  span{
    margin-bottom: 43px;
  }

  .buttonsFooter{
    display: flex;
    margin-left: 140px;

    #button-grey-4-big{
      margin-right: 10px;
    }
  }
`;
