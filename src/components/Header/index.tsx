import { HeadeMain } from "./style";
import logo from "../../assets/logo.png";
import userImage from "../../assets/user.jpg";
import { VscThreeBars } from "react-icons/vsc";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/user/userContext";
import Modal from "react-modal";
import ModalEditProfile from "../ModalEditProfile/ModalEditProfile";
import ModalEditAddress from "../ModalEditAddress/ModalEditAddress";

type customStyleType = {
  content: any;
  overlay: any;
};

export const Header = () => {
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [activeItemsDropdown, setActiveItemsDropdown] = useState(false);
  const [modalEditProfileIsOpen, setModalEditProfileIsOpen] = useState(false);
  const [modalEditAddressIsOpen, setModalEditAddressIsOpen] = useState(false);


  const { token, getUserData, user }: any = useContext(UserContext);

  const history = useHistory();

  const logOff = () => {
    setActiveDropDown(false);
    localStorage.clear();
    history.push("/");
    location.reload();
  };

  const customStyles: customStyleType = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: "100%",
      width: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border: "none",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(18, 18, 20, 0.5)",
    },
  };

  function handleOpenEditProfileModal() {
    setModalEditProfileIsOpen(true);
  }

  function handleCloseEditProfileModal() {
    setModalEditProfileIsOpen(false);
  }

  function handleOpenEditAddressModal() {
    setModalEditAddressIsOpen(true);
  }

  function handleCloseEditAddressModal() {
    setModalEditAddressIsOpen(false);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <HeadeMain>
      <Modal
        style={customStyles}
        isOpen={modalEditProfileIsOpen}
        onRequestClose={handleCloseEditProfileModal}
      >
        <ModalEditProfile handleCloseEditProfileModal={handleCloseEditProfileModal} />
      </Modal>
      <Modal
        style={customStyles}
        isOpen={modalEditAddressIsOpen}
        onRequestClose={handleCloseEditAddressModal}
      >
        <ModalEditAddress handleCloseEditAddressModal={handleCloseEditAddressModal} />
      </Modal>

      <div className="container">
        <img src={logo} alt="" onClick={() => history.push("/")} />
        <div className="buttonSection">
          <VscThreeBars
            onClick={() => setActiveItemsDropdown(true)}
            className="dropdown"
          />
          {activeItemsDropdown ? (
            <div className="userItemsDropDown" id="dropDown">
              <ol>
                <li>Carros</li>
                <li>Motos</li>
                <li>Leilão </li>
                <li className="upperLine">
                  <a href="">Fazer Login</a>
                </li>
                <button>Cadastrar</button>
              </ol>
            </div>
          ) : (
            ""
          )}
          <div className="productLinks">
            <a href="">Carros</a>
            <a href="">Motos</a>
            <a href="">Leilão</a>
          </div>
          {token === null ? (
            <div className="buttons">
              <button onClick={() => history.push("/login")}>
                Fazer Login
              </button>
              <button onClick={() => history.push("/register")}>
                Cadastrar
              </button>
            </div>
          ) : (
            <div className="userInfo">
              <div>
                <img className="userImg" src={userImage} alt="" />
                <h1 onClick={() => setActiveDropDown(true)}>{user.name}</h1>
                {activeDropDown ? (
                  <div className="userDropDown" id="dropDown">
                    <ol>
                      <li onClick={()=>handleOpenEditProfileModal()} className="options">Editar Perfil</li>
                      <li onClick={()=>handleOpenEditAddressModal()} className="options">Editar Endereço</li>
                      <li className="options">Minhas Compras</li>
                      <li
                        className="options"
                        onClick={() => history.push("/user")}
                      >
                        Meu Perfil
                      </li>
                      <li className="options" onClick={() => logOff()}>
                        {" "}
                        Sair
                      </li>
                    </ol>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </HeadeMain>
  );
};
