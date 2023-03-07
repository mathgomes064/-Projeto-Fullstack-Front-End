import styled from "styled-components";

export const StyleUserPage = styled.section`
  background-color: var(--grey-8);
  #blue-background {
    height: 216px;
    margin: 0;
    padding-top: 16px;
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(315deg, #5126ea 3%, #b0a6f0 38%, rgba(48,238,226,1) 68%, #e34d8c 98%);
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;
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
