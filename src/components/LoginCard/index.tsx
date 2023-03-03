import { Container } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/user/userContext";


export const LoginCard = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatório"),
  });
//asafasdfgsdfgtestetet
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const {loginUser} : any = useContext(UserContext)
  const onSubmitFunction = async(data: any) => {
    console.log(data);
  };

  const history = useHistory()

  const routeChange = () =>{ 
    let path = `/recuperacao`; 
    history.push(path);
  }

  return (
    <Container>
      <h1 id="title-5-500">Login</h1>
      <div id="wrapper-form">
        <form onSubmit={handleSubmit(loginUser)}>
          <label>Usuário</label>
          <input
            type="text"
            placeholder="Digitar usuário"
            {...register("email")}
          />
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digitar senha"
            {...register("password")}
          />
          <a  onClick={() => {routeChange()}} className= "Password"id="text-2-500">Esqueci minha senha</a>
          <button  id="button-blue-login-big" type="submit">
            Entrar
          </button>
        </form>
      </div>
      <div id="wrapper-button">
        <p id="text-2-400">Ainda não possui conta?</p>
        <button id="button-grey-login-big">Cadastrar</button>
      </div>
    </Container>
  );
};
