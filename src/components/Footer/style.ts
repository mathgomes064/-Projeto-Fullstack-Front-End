import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #0B0D0D;
  position: relative;
  bottom: 0px;
  margin-top: 100px;
  img{
    width: 153px;
    height: 26px;
  }

  span {
    font-family: 'Inter', sans-serif;
    color: var(--white);
    font-weight: 400;
  }

  @media (max-width: 550px){
        display: flex;
        flex-direction: column;
        text-align: center;
        
    }
`;
