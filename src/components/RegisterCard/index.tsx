import { Container } from "./style";
import { useState } from "react";

export const RegisterCard = () => {
  const [userType, setUserType] = useState("user");

  return (
    <Container>
      <h1 id="title-5-500">Cadastro</h1>
      <h2 id="title-2-500">Informações pessoais</h2>
      <div id="wrapper-form">
        <form action="submit">
          <label>Nome</label>
          <input type="text" placeholder="Ex: Samuel Leão" />

          <label>Email</label>
          <input type="text" placeholder="Ex: samuel@kenzie.com.br" />

          <label>CPF</label>
          <input type="number" placeholder="000.000.000-00" />

          <label>Celular</label>
          <input type="number" placeholder="(DDD) 90000-0000" />

          <label>Data de nascimento</label>
          <input type="number" placeholder="00/00/00" />

          <label>Descrição</label>
          <input type="text" placeholder="Digitar descrição" />

          <p id="title-2-500">Infomações de endereço</p>

          <label>CEP</label>
          <input type="number" placeholder="00000.000" />

          <div id="wrapper-endereco">
            <div id="wrapper-endereco-info">
              <label>Estado</label>
              <input type="text" placeholder="Digitar Estado" />
            </div>

            <div id="wrapper-endereco-info">
              <label>Cidade</label>
              <input type="text" placeholder="Digitar Cidade" />
            </div>
          </div>

          <label>Rua</label>
          <input type="text" placeholder="Digitar Rua" />

          <div id="wrapper-endereco">
            <div id="wrapper-endereco-info">
              <label>Número</label>
              <input type="number" placeholder="Digitar número" />
            </div>

            <div id="wrapper-endereco-info">
              <label>Complemento</label>
              <input type="text" placeholder="Ex: apart 307" />
            </div>
          </div>

          <p id="title-2-500">Tipo de conta</p>
          <div id="wrapper-button">
            <button id="button-blue-register-big"
            className={userType === "user" ? "selected" : "notSelected"}
            type="button"
            onClick={() => setUserType("notSelected")}>Comprador</button>
            
            <button id="button-blue-register-big"
            className={userType === "carro" ? "notSelected" : "selected"}
            type="button"
            onClick={() => setUserType("moto")}>Anunciante</button>
          </div>

          <label>Senha</label>
          <input type="text" placeholder="Digitar senha" />

          <label>Confirmar Senha</label>
          <input type="text" placeholder="Digitar senha" />
        </form>
      </div>
      <div id="wrapper-button">
        <button id="button-blue-login-big">
          Finalizar Cadastro
        </button>
      </div>
    </Container>
  );
};
