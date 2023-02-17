import { Container } from "./style";
import background from "../../assets/backgroundcardauction.svg";
import timer from "../../assets/timer.svg";
import arrow from "../../assets/arrow.svg";

export const Header = () => {

  const handleClick = event => {
    var divMotors= document.getElementById("div-motor")
    var divLogin=document.getElementById("div-login")
    
    if (divMotors != null && divLogin != null) {
      if(divMotors.style.display ==='block') {
       divMotors.style.display = 'none' 
       divLogin.style.display = 'block';
      } else {
        divMotors.style.display = 'block'
        divLogin.style.display = 'none';
  } 
    }
 
  };
  return (
    <>
      <Container>
        <div>
          <div className="right">
              <div>
                <h1>Motors shop</h1>
              </div>
            <div>
              <button>Carros</button>
              <button>Motos</button>
              <button>Leilão</button>
            </div>
          </div>
          <div className="left">
            <div id='div-motor'>
              <button>Fazer Login</button>
              <button id="bt-motor" onClick={handleClick}>Cadastrar</button> 
            </div>
            <div className="right-register" id="div-login">
              <button  id="bt-cadastrar" onClick={handleClick} >usuario</button>
            </div>
          </div>
        </div>
        
  
      </Container>
    </>
  );
};
