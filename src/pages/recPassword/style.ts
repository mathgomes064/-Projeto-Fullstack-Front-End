import styled from "styled-components";

export const RecPage = styled.section`
  border-radius: 4px;
  background-color: var(--white);

  @media (max-width: 450px) {
    width: 80%;
  }
`;
export const Container = styled.body`
  font-family: 'Inter', sans-serif;
  background-color: var(--grey-8);
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
