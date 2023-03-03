import { Container } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../service";


export const RecPasswordCard = () => {

  const params = useParams();

  const [login, setLogin] = useState()

  const [msgToShow, setMsgToShow] = useState("Carregando...")
  
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
  const history = useHistory();

  const sendEmail = () =>
  useEffect(() => {
    api
      .post("/login/forgot_password"+params.email)
      .then((res) => {
        setLogin(res.data);
        console.log(res)
      })
      .catch((err) => {
          setMsgToShow("Email não cadastrado.")
      });
  }, [setLogin]);

  
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
          <button onClick={sendEmail} id="button-blue-login-big" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </Container>
  );
};
