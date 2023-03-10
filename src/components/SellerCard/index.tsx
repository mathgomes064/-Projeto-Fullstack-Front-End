import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/user/userContext";
import { Container } from "./style";
import InitialsAvatar from 'react-initials-avatar'

export const SellerCard = ({handleOpenModal}:any) => {

  const {getUserData, user, loading} : any = useContext(UserContext)

  useEffect(()=> {getUserData()}, [])

  return (
    <>
      {loading?
      (
        <h1>carregando...</h1>
      )
      :
      (
        <Container>
          <section>
            <div id="profile-pic">
            { user &&  <h3><InitialsAvatar name={user.name}/></h3> }
            </div>
            <div id="profile-name">
            { user &&  <h3>{user.name}</h3>}

              <button id="container-anunciante">Anunciante</button>
            </div>

            { user &&  <span>{user.description}</span>}
          </section>
        </Container>
      )}
    </>
  );
};
