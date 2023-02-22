import styled from "styled-components";


export const Container = styled.div`
  section {
  background-color: white;
  margin: 65px 20px 31px 20px;
  justify-content: center;
  align-items: center;
  padding: 40px 29px 60px 20px;
  border-radius: 4px;
}
#profile-pic {
  background-color: var(--brand-1);
  width: 104px;
  height: 104px;
  border-radius: 50px;
  color: var(--white);
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-bottom: 42px;
  font-family: "Inter";
  font-size: 36px;
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

#container-anunciante {
  padding: 0px 7px;
  background-color: var(--brand-4);
  border-radius: 4px;

}

#container-anunciante > p {
  font-size: 14px;
  font-family: "Inter";
  font-weight: 500;
  color: var(--brand-1);

}

#container {
  display: flex;
  flex-direction: column;
}

span {
  font-size: 16px;
  font-family: "Inter";
  font-weight: 400;
  color: var(--grey-2);
}

 


@media (min-width: 375px){
  section {
    margin-left: 140px;
    margin-right: 140px;
  }

  #profile-pic {
    margin-bottom: 4px;
  }
        
}
`;