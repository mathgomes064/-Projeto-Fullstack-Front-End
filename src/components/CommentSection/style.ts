import styled from "styled-components";

export const Container = styled.section`
  #profile-pic {
    background-color: var(--brand-1);
    width: 32px;
    height: 32px;
    border-radius: 50px;
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    margin-bottom: 42px;
    font-family: "Inter";
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }

  #profile-name {
    display: flex;
    align-items: center;
  }

  #profile-name > h3 {
    font-size: 24px;
    font-family: "Lexend";
    font-weight: 600;
    margin-right: 9px;
  }

  span {
    font-size: 16px;
    font-family: "Inter";
    font-weight: 400;
    color: var(--grey-3);
  }

  #text-2-500 {
    color: var(--grey-1);
    font-family: "Inter";
    font-weight: 500;
    font-size: 14px;
  }

  #wrapper-coments {
    background-color: white;
    padding: 36px 44px;
    width: 750px;
  }

  #comment-info > #profile-pic {
    margin-right: 13px;
  }

  #comment-info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #circle {
    background-color: grey;
    margin: 0px 12px 0px 12px;
    color: white;
    width: 5px;
    height: 5px;
    border-radius: 50px;
  }

  #coment {
    margin-top: 15px;
  }
`;
