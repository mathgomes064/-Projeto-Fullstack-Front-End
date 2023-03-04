import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/user/userContext";
import { Container } from "./style";

export const UserCard = ({handleOpenModal}:any) => {

  const {getUserData, user} : any = useContext(UserContext)

  useEffect(()=> {getUserData()}, [])

  return (
    <>
      <Container>
        <section>
          <div id="profile-pic">
            <h3>{user.name[0]}</h3>
          </div>
          <div id="profile-name">
            <h3>{user.name}</h3>

            <button id="container-anunciante">Anunciante</button>
          </div>

          <span>
            {user.description}
          </span>
          <button id="button-blue-1-big" onClick={handleOpenModal}>Criar anuncio</button>
        </section>
      </Container>
    </>
  );
};
