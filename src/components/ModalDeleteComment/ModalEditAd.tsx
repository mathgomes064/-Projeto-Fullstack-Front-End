import { Container, Content } from "./styles.js";
import { MdClose } from "react-icons/md";

function ModalDeleteAd({ handleCloseModal }:any) {
  return (
    <Container>
      <Content>
        <div className="headerForm">
          <h2 id="title-7-500">Excluir anúncio</h2>
          <MdClose className="closeButton" onClick={() => handleCloseModal()} />
        </div>
        <p id="title-7-500">Tem certeza que deseja remover este comentário?</p>
        <span id="text-1-400">
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </span>
        <div className="buttonsFooter">
          <button id="button-grey-4-big" onClick={handleCloseModal}>Cancelar</button>
          <button id="button-red-1-big">Sim, excluir comentário</button>
        </div>
      </Content>
    </Container>
  );
}

export default ModalDeleteAd;
