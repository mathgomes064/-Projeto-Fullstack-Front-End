import { Container } from "./style";
import logo from "../../assets/logo.png";
import icone from "../../assets/icone.png";
import barras from "../../assets/barras.png";


export const Header = () => {

  const handleClickLogin = event => {
    var divMotors= document.getElementById("div-motor")
    var divLogin=document.getElementById("div-login")
    
    if (divMotors != null && divLogin != null) {
      if(divMotors.style.display ==='flex') {
       divMotors.style.display = 'none' 
       divLogin.style.display = 'flex';
      } else {
        divMotors.style.display = 'flex'
        divLogin.style.display = 'none';
  } 
 }
}
const handleClickDropDown = event => {
  
  var dropDown=document.getElementById("dropDown")

  if (dropDown != null) {
    if(dropDown.style.display ==='none') {
      dropDown.style.display = 'flex' 
    } else {
      dropDown.style.display = 'none'
} 
  }

}
const handleClickDropDownReponsive = event => {
  
  var dropDownResponsive=document.getElementById("bt-responsive")

  if (dropDownResponsive != null) {
    if(dropDownResponsive.style.display ==='none') {
      dropDownResponsive.style.display = 'flex' 
    } else {
      dropDownResponsive.style.display = 'none'
} 
  }

};
  return (
    <>
      <Container>
        <div className="Main">
          <div className="right">
              <div className="divLogo">
                <img src={logo} alt="logo" />
                <img src = {barras}  onClick={handleClickDropDownReponsive}  className="icon"/>
              </div>
            <div className="nav">
              <p>Carros</p>
              <p>Motos</p>
              <p>Leilão</p>
            </div>
          </div>
          <div className="left">
            <div className="div-log" id='div-motor'>
              <button  className="button"id="bt-motor" onClick={handleClickLogin}>Fazer Login</button>
              <button className="button">Cadastrar</button> 
            </div>
            <div className="right-register" id="div-login">
              <img  className="imagem" src={icone} alt="logo" />
              <p className="user"  onClick={handleClickDropDown} >usuario</p>
                <div className="DropDown" id='dropDown'>
                  <ol>
                    <li>Editar Perfil</li>
                    <li>Editar Endereço</li>
                    <li>Minhas Compras</li>
                    <li className="out" id="bt-cadastrar" onClick={handleClickLogin}  > Sair</li>
                  </ol>
                </div>
            </div>
          </div>
          <div className="responsive" id="bt-responsive">
            <div className="responsive-top">
              <p>Motos</p>
              <p>Carros</p>
              <p>Leilão</p>
          </div >
          <div className="responsive-bottom">
            <div className="Login-responsive">
              <p>Fazer Login</p>
            </div>
            <div className="buttom-Responsive">
              <button >Cadastrar</button>
            </div>
          </div>            
          </div>
        </div>
      </Container>
    </>
  );
};
