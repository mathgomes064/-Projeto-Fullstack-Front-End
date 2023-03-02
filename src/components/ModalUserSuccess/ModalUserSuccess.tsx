import { Container, Content } from "./styles.js";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";

function ModalUserSuccess({ handleCloseModal }: any) {
  const history = useHistory();

  const redirectToLoginPage = () =>{
    return history.push("/login")
  }

  return (
    <Container>
      <Content>
        <div className="headerForm">
          <h2 id="title-7-500">Sucesso</h2>
          <MdClose className="closeButton" onClick={() => handleCloseModal()} />
        </div>
        <p id="title-7-500">Sua conta foi criada com sucesso!</p>
        <span id="text-1-400">
          Agora você poderá ver seus negócios crescendo em grande escala
        </span>
        <button id="button-blue-1-big" onClick={()=>redirectToLoginPage()}>Ir para o login</button>
      </Content>
    </Container>
  );
}

export default ModalUserSuccess;
