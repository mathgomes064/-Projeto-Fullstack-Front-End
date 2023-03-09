import { Container, HeadeMain } from "./style";
import logo from "../../assets/logo.png";
// import userImage from "../../assets/user.jpg";
import userImage from "../../assets/userImage.png"
import { VscThreeBars } from "react-icons/vsc";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/user/userContext";
import Modal from "react-modal";
import ModalEditProfile from "../ModalEditProfile/ModalEditProfile";
import ModalEditAddress from "../ModalEditAddress/ModalEditAddress";
import InitialsAvatar from "react-initials-avatar";
import ModalSidebar from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

type customStyleType = {
  content: any;
  overlay: any;
};

export const Header = () => {
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [activeItemsDropdown, setActiveItemsDropdown] = useState(false);
  const [modalEditProfileIsOpen, setModalEditProfileIsOpen] = useState(false);
  const [modalEditAddressIsOpen, setModalEditAddressIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { token, getUserData, user, loading }: any = useContext(UserContext);

  const history = useHistory();

  const logOff = () => {
    setActiveDropDown(false);
    localStorage.clear();
    history.push("/");
    location.reload();
  };

  const style = {
    position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
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
    setOpen(false);
  }

  function handleCloseEditProfileModal() {
    setModalEditProfileIsOpen(false);
  }

  function handleOpenEditAddressModal() {
    setModalEditAddressIsOpen(true);
    setOpen(false);
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
        <ModalEditProfile
          handleCloseEditProfileModal={handleCloseEditProfileModal}
        />
      </Modal>
      <Modal
        style={customStyles}
        isOpen={modalEditAddressIsOpen}
        onRequestClose={handleCloseEditAddressModal}
      >
        <ModalEditAddress
          handleCloseEditAddressModal={handleCloseEditAddressModal}
        />
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
            <a id="" href="">
              Carros
            </a>
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
                <div className="profilePic">
                  {loading ? (
                    <img src={userImage} alt="imagem de perfil" />
                  ) : (
                    <h3 style={{ fontFamily: "'Inter', sans-serif" }}>
                      <InitialsAvatar name={user.name} />
                    </h3>
                  )}
                </div>
                <h1 onMouseDown={handleOpen}>{user.name}</h1>
                <ModalSidebar open={open} onClose={handleClose}>
                  <Fade in={open}>
                    <Box sx={style}>
                      <Container>
                        <div className="outsideDiv">
                          <div className="upperDiv">
                            <a
                              style={{ fontFamily: "'Inter', sans-serif" }}
                              onClick={() => handleOpenEditProfileModal()}
                              className="options"
                            >
                              Editar Perfil
                            </a>
                            <a
                              style={{ fontFamily: "'Inter', sans-serif" }}
                              onClick={() => handleOpenEditAddressModal()}
                              className="options"
                            >
                              Editar Endereço
                            </a>
                            <a
                              style={{ fontFamily: "'Inter', sans-serif" }}
                              className="options"
                            >
                              Minhas Compras
                            </a>
                            <a
                              className="options"
                              onClick={() => history.push("/user")}
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              Meu Perfil
                            </a>
                          </div>
                          <div className="lowerDiv">
                            <a
                              style={{ fontFamily: "'Inter', sans-serif" }}
                              className="options"
                              onClick={() => logOff()}
                            >
                              {" "}
                              Sair
                            </a>
                          </div>
                        </div>
                      </Container>
                    </Box>
                  </Fade>
                </ModalSidebar>
                {/* {activeDropDown ? (
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
                  )} */}
              </div>
            </div>
          )}
        </div>
      </div>
    </HeadeMain>
  );
};
