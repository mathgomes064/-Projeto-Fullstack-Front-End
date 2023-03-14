import { Container } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user/userContext";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";


export const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false)

  const schema = yup.object().shape({
    email: yup.string().required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const {loginUser} : any = useContext(UserContext)

  const history = useHistory()

  const routeChange = () =>{ 
    let path = `/recuperacao`; 
    history.push(path);
  }

  return (
    <Container>
      <h1 >Login</h1>
      <div id="wrapper-form">
        <form onSubmit={handleSubmit(loginUser)}>
          <label>Email</label>
          <input
            type="text"
            placeholder="Digitar email"
            {...register("email")}
          />
          <label>Senha</label>
          <div className="divInput">
            <input placeholder="Digitar senha" type={showPassword? "text" : "password"} {...register("password")}/>
            {showPassword ? (
            <AiFillEye
            onClick={() => setShowPassword(!showPassword)}
            className="olhoAberto"
            />
            ) : (
            <AiFillEyeInvisible
                onClick={() => setShowPassword(!showPassword)}
                className="olhoAberto"
            />
            )}
          </div>
          <a  onClick={() => {routeChange()}} className="password" id="text-2-500">Esqueci minha senha</a>
          <button id="button-blue-login-big" type="submit">
            Entrar
          </button>
        </form>
      </div>
      <div id="wrapper-button">
        <p id="text-2-400">Ainda não possui conta?</p>
        <button onClick={() => history.push("/register")} id="button-grey-login-big">Cadastrar</button>
      </div>
    </Container>
  );
};
