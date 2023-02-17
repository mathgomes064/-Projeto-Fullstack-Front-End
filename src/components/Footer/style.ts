import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 140px;
  background: var(--grey-0);

  img{
    width: 153px;
    height: 26px;
  }

  @media (max-width: 375px){
        display: flex;
        flex-direction: column;
        text-align: center;
        
    }
`;
