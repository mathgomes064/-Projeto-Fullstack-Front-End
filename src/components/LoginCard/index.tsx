import { Container } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";


export const LoginCard = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatório"),
  });
//asafasdfgsdfgtestetet
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <h1 id="title-5-500">Login</h1>
      <div id="wrapper-form">
        <form onSubmit={handleSubmit(onSubmitFunction)}>
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
          <a id="text-2-500">Esqueci minha senha</a>
          <button id="button-blue-login-big" type="submit">
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
