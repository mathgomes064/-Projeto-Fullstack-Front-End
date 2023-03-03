import { Container } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";


export const RecPasswordCard = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Email é obrigatório"),
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
      <h1 id="title-5-500">Recuperação de senha</h1>
      <div id="wrapper-form">
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label>Digite seu email</label>
          <input
            type="test"
            placeholder="Ex: samuel@kenzie.com.br"
            {...register("email")}
          />
          <button id="button-blue-login-big" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </Container>
  );
};
