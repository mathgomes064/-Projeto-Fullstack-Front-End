import { Container, Content } from "./styles.js";
import { MdClose } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { UserContext } from "../../providers/user/userContext.js";
import { useContext } from "react";

function ModalEditComment({ handleCloseEditProfileModal }: any) {

  const {updateUserData,user}: any = useContext(UserContext)

  const schema = yup.object().shape({
    descrição: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    updateUserData(data,user.id)
    handleCloseEditProfileModal()
    location.reload()
  };


  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="headerForm">
            <h2 id="title-7-500">Editar perfil</h2>
            <MdClose
              className="closeButton"
              onClick={() => handleCloseEditProfileModal()}
            />
          </div>
          <label id="input-label">Descrição</label>
          <input
            id="input-placeholder"
            type="text"
            placeholder="Digitar descrição"
            {...register("description")}
            defaultValue={user.description}
          />
          <div className="footerButtons">
            <button onClick={handleCloseEditProfileModal}>Cancelar</button>
            <button type="submit">Salvar alterações</button>
          </div>
        </form>
      </Content>
    </Container>
  );
}

export default ModalEditComment;
