

import logo from "../../assets/motorsshop.svg";
import { Container } from "./style";


export const Footer = () => {
  return (
      <Container>
        <img src={logo} alt="logo"/>
        <span>© 2022 -  Todos os direitos reservados.</span>
        <button>^</button>
      </Container>
  );
};
