import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--grey-0);
  position: relative;
  bottom: 0px;
  margin-top: 100px;
  img{
    width: 153px;
    height: 26px;
  }

  @media (max-width: 550px){
        display: flex;
        flex-direction: column;
        text-align: center;
        
    }
`;
