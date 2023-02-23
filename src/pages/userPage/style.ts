import styled from "styled-components";

export const StyleUserPage = styled.section`
  background-color: var(--grey-8);
  #blue-background {
    background-color: var(--brand-1);
    height: 216px;
    margin: 0;
    padding-top: 16px;
  }

  #container-auction {
    align-items: center;
    margin-top: 300px;
    margin-left: 20px;
  }

  #container-cars {
    margin-top: 60px;
    margin-left: 20px;
  }

  #container-motorcycles {
    margin-top: 60px;
    margin-left: 20px;
  }

  @media (min-width: 450px) {
    #container-auction {
      align-items: center;
      margin-top: 240px;
      margin-left: 46px;
    }

    #container-cars {
      margin-top: 120px;
      margin-left: 46px;
    }

    #container-motorcycles {
      margin-top: 120px;
      margin-left: 46px;
    }
  }
`;
