import { Container, Content } from "./styles.js";
import { MdClose } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { UserContext } from "../../providers/user/userContext.js";
import { useContext } from "react";

function ModalEditProfile({ handleCloseEditProfileModal }: any) {

  const {updateUserData,user}: any = useContext(UserContext)

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required(),
    cpf: yup.string().required(),
    cellPhone: yup.string().required(),
    birthDate: yup.string().required(),
    description: yup.string().required(),
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
          <h3 id="text-2-500">Infomações pessoais</h3>
          <label id="input-label">Nome</label>
          <input
            id="input-placeholder"
            type="text"
            placeholder="Digitar nome"
            {...register("name")}
            defaultValue={user.name}
          />
          <label id="input-label">Email</label>
          <input
            id="input-placeholder"
            type="text"
            placeholder="Digitar email"
            {...register("email")}
            defaultValue={user.email}
          />
          <label id="input-label">CPF</label>
          <input
            id="input-placeholder"
            type="text"
            placeholder="Digitar seu cpf"
            {...register("cpf")}
            defaultValue={user.cpf}
          />
          <label id="input-label">Celular</label>
          <input
            id="input-placeholder"
            type="text"
            placeholder="Digitar seu telefone"
            {...register("cellPhone")}
            defaultValue={user.cellPhone}
          />
          <label id="input-label">Data de nascimento</label>
          <input
            id="input-placeholder"
            type="text"
            placeholder="Digitar data de nascimento"
            {...register("birthDate")}
            defaultValue={user.birthDate}
          />
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

export default ModalEditProfile;
