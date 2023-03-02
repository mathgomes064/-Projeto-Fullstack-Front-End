import { Container } from "./style";

export const LoginCard = () => {
  return (
    <Container>
      <h1 id="title-5-500">Login</h1>
      <div id="wrapper-form">
        <form action="submit">
          <label>Usuário</label>
          <input type="text" placeholder="Digitar usuário" />
          <label>Senha</label>
          <input type="text" placeholder="Digitar senha" />
        </form>
      </div>
      <div id="wrapper-button">
        <a id="text-2-500">Esqueci minha senha</a>
        <button id="button-blue-login-big">Entrar</button>
        <p id="text-2-400">Ainda não possui conta?</p>
        <button id="button-grey-login-big">Cadastrar</button>
      </div>
    </Container>
  );
};
