import { Container } from "./style";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { IUserCreate, IUserRaw } from "../../interfaces/user";
import { UserContext } from "../../providers/user/userContext";
import { useHistory } from "react-router-dom";

export const RegisterCard = () => {
  const [userType, setUserType] = useState(false);
    
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório"),
    cpf: yup.string().required("Cpf obrigatório"),
    cellPhone: yup.string().required("Celular obrigatório"),
    birthDate: yup.string().required("Data obrigatória"),
    description: yup.string().required("Descrição obrigatória"),
    cep: yup.string().required("Cep obrigatório"),
    state: yup.string().required("Estado Obrigatório"),
    city: yup.string().required("Cidade obrigatório"),
    street: yup.string().required("Rua obrigatória"),
    number: yup.string().required("Numero obrigatório"),
    complement: yup.string().required("Complemento obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup.string().required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "As senhas devem ser identicas")
  })

  const { register, handleSubmit, formState: {errors} } = useForm<IUserRaw>({
    resolver: yupResolver(formSchema)
  })

  const {registerUser}: any = useContext(UserContext)

  const [address, setAddress] = useState({})

  const onSubmitFunction = async(data: IUserRaw) =>{
    data.isAdvertiser = userType
    const tratedData: IUserCreate = {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      cellPhone: data.cellPhone,
      birthDate: data.birthDate,
      description: data.description,
      address:{
        cep: data.cep,
        state: data.state,
        city: data.city,
        street: data.street,
        number: data.number,
        complement: data.complement
      },
      isAdvertiser: data.isAdvertiser,
      password: data.password,
      confirmPassword: data.confirmPassword
    }
    await registerUser(tratedData)
  }

  return (
    <Container>
      <h1 id="title-5-500">Cadastro</h1>
      <h2 id="title-2-500">Informações pessoais</h2>
      <div id="wrapper-form">
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label>Nome</label>
          <input type="text" placeholder="Ex: Samuel Leão" {...register("name")}/>
          <span className="error">{errors.name?.message}</span>

          <label>Email</label>
          <input type="text" placeholder="Ex: samuel@kenzie.com.br" {...register("email")}/>
          <span className="error">{errors.email?.message}</span>

          <label>CPF</label>
          <input type="text" placeholder="000.000.000-00" {...register("cpf")}/>
          <span className="error">{errors.cpf?.message}</span>

          <label>Celular</label>
          <input type="text" placeholder="(DDD) 90000-0000" {...register("cellPhone")}/>
          <span className="error">{errors.cellPhone?.message}</span>

          <label>Data de nascimento</label>
          <input type="text" placeholder="00/00/00" {...register("birthDate")}/>
          <span className="error">{errors.birthDate?.message}</span>

          <label>Descrição</label>
          <input type="text" placeholder="Digitar descrição" {...register("description")}/>
          <span className="error">{errors.description?.message}</span>

          <p id="title-2-500">Infomações de endereço</p>

          <label>CEP</label>
          <input type="text" placeholder="00000.000" {...register("cep")}/>
          <span className="error">{errors.cep?.message}</span>

          <div className="stateAndCity" id="wrapper-endereco">
            <div id="wrapper-endereco-info">
              <label>Estado</label>
              <input type="text" placeholder="Digitar Estado" {...register("state")}/>
              <span className="error">{errors.state?.message}</span>
            </div>

            <div id="wrapper-endereco-info">
              <label>Cidade</label>
              <input type="text" placeholder="Digitar Cidade" {...register("city")}/>
              <span className="error">{errors.city?.message}</span>
            </div>
          </div>

          <label>Rua</label>
          <input type="text" placeholder="Digitar Rua" {...register("street")}/>
          <span className="error">{errors.street?.message}</span>


          <div className="numberAndComplement" id="wrapper-endereco">
            <div id="wrapper-endereco-info">
              <label>Número</label>
              <input type="text" placeholder="Digitar número" {...register("number")}/>
              <span className="error">{errors.number?.message}</span>

            </div>

            <div id="wrapper-endereco-info">
              <label>Complemento</label>
              <input type="text" placeholder="Ex: apart 307" {...register("complement")}/>
              <span className="error">{errors.complement?.message}</span>
            </div>
          </div>

          <p id="title-2-500">Tipo de conta</p>
          <div className="wrapper-button">
            <button id="button-blue-register-big"
            className={userType === true ? "selected" : "notSelected"}
            type="button"
            onClick={() => setUserType(false)}>Comprador</button>
            
            <button id="button-blue-register-big"
            className={userType === false ? "notSelected" : "selected"}
            type="button"
            onClick={() => setUserType(true)}>Anunciante</button>
          </div>

          <label>Senha</label>
          <input type="password" placeholder="Digitar senha" {...register("password")}/>
          <span className="error">{errors.password?.message}</span>

          <label>Confirmar Senha</label>
          <input type="password" placeholder="Digitar senha" {...register("confirmPassword")}/>
          <span className="error">{errors.confirmPassword?.message}</span>
          <div id="wrapper-button">
            <button type="submit" id="button-blue-login-big">
                Finalizar Cadastro
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};
