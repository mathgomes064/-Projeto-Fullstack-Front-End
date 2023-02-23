import { Container, Content } from "./styles.js";
import { MdClose } from "react-icons/md";

function ModalCreatedSuccess({ handleCloseModal }: any) {
  return (
    <Container>
      <Content>
        <div className="headerForm">
          <h2 id="title-7-500">Sucesso</h2>
          <MdClose className="closeButton" onClick={() => handleCloseModal()} />
        </div>
        <p id="title-7-500">Seu anúncio foi criado com sucesso!</p>
        <span id="text-1-400">
          Agora você poderá ver seus negócios crescendo em grande escala
        </span>
      </Content>
    </Container>
  );
}

export default ModalCreatedSuccess;
