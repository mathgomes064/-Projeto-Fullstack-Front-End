import { Container, Content } from "./styles.js";
import { MdClose } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function ModalEditAddress({ handleCloseEditAddressModal }: any) {
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
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="headerForm">
            <h2 id="title-7-500">Editar endereço</h2>
            <MdClose
              className="closeButton"
              onClick={() => handleCloseEditAddressModal()}
            />
          </div>
          <h3 id="text-2-500">Infomações de endereço</h3>
          <label id="input-label">CEP</label>
          <input
            id="input-placeholder"
            type="text"
            placeholder="Digitar cep"
            {...register("cep")}
          />
          <div className="flexDiv">
            <div className="divVehicle-1">
              <label id="input-label">Estado</label>
              <input
                id="input-placeholder"
                type="text"
                placeholder="Digitar email"
                {...register("state")}
              />
            </div>
            <div className="divVehicle-1">
              <label id="input-label">Cidade</label>
              <input
                id="input-placeholder"
                type="text"
                placeholder="Digitar cidade"
                {...register("city")}
              />
            </div>
          </div>
          <label id="input-label">Rua</label>
          <input
            id="input-placeholder"
            type="text"
            placeholder="Digitar sua rua"
            {...register("street")}
          />
          <div className="flexDiv">
            <div className="divVehicle-1">
              <label id="input-label">Número</label>
              <input
                id="input-placeholder"
                type="text"
                placeholder="Digitar número"
                {...register("number")}
              />
            </div>
            <div className="divVehicle-1">
              <label id="input-label">Complemento</label>
              <input
                id="input-placeholder"
                type="text"
                placeholder="Digitar complemento"
                {...register("complement")}
              />
            </div>
          </div>
          <div className="footerButtons">
            <button onClick={handleCloseEditAddressModal}>Cancelar</button>
            <button type="submit">Salvar alterações</button>
          </div>
        </form>
      </Content>
    </Container>
  );
}

export default ModalEditAddress;
