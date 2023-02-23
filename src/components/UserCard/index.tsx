import { Container } from "./style";

export const UserCard = ({handleOpenModal}:any) => {
  return (
    <>
      <Container>
        <section>
          <div id="profile-pic">
            <h3>SL</h3>
          </div>
          <div id="profile-name">
            <h3>Samuel Leão</h3>

            <button id="container-anunciante">Anunciante</button>
          </div>

          <span>
            Lorem Ispansum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </span>
          <button id="button-blue-1-big" onClick={handleOpenModal}>Criar anuncio</button>
        </section>
      </Container>
    </>
  );
};
