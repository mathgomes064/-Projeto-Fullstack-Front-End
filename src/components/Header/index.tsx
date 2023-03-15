import { Container, HeadeMain } from "./style";
import logo from "../../assets/motorsshop.svg";
import userImage from "../../assets/6915987.png"
import { VscThreeBars } from "react-icons/vsc";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/user/userContext";
import InitialsAvatar from "react-initials-avatar";
import ModalSidebar from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import {AiOutlineUser} from "react-icons/ai"
import {BsFillCartCheckFill} from "react-icons/bs"
import {FaRegAddressBook} from "react-icons/fa"
import {AiFillProfile} from "react-icons/ai"
import {BiLogIn} from "react-icons/bi"
import { NewModalEditProfile } from "../NewModalEditProfile";
import { NewModalEditAddress } from "../NewModalEditAddress";

export const Header = () => {
  const [activeItemsDropdown, setActiveItemsDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { token, getUserData, user, loading }: any = useContext(UserContext);

  const history = useHistory();

  const logOff = () => {
    localStorage.clear();
    history.push("/");
    location.reload();
  };

  const style = {
    position: "absolute",
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <HeadeMain>
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
              <button className="login-button" onClick={() => history.push("/login")}>
                Fazer Login
              </button>
              <button className="register-button" onClick={() => history.push("/register")}>
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
                      <InitialsAvatar className="profilePic" name={user.name} />
                    </h3>
                  )}
                </div>
                <h1 onMouseDown={handleOpen}>{user.name}</h1>
                <ModalSidebar open={open} onClose={handleClose}>
                  <Fade in={open}>
                    <Box sx={style}>
                      <Container>
                        <div className="outsideDiv">
                          <div className="pictureAndOptions">
                            {loading ? (
                              <img src={userImage} alt="imagem de perfil" />
                            )
                            :
                            (
                              <h3 style={{ fontFamily: "'Inter', sans-serif" }}>
                                <InitialsAvatar className="profilePic" name={user.name} />
                              </h3>
                            )}
                            <div className="upperDiv">
                              <div>
                                <div>
                                  <AiFillProfile className="profile"/>
                                  <NewModalEditProfile/>
                                </div>
                              </div>
                              <div>
                                <div>
                                  <FaRegAddressBook className="address"/>
                                  <NewModalEditAddress/>
                                </div>
                              </div>
                              <div>
                                <div>
                                  <BsFillCartCheckFill/>
                                  <a
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                    className="options"
                                  >Minhas Compras</a>
                                </div>
                              </div>

                              <div>
                                <div>
                                  <AiOutlineUser />
                                  <a
                                    className="options"
                                    onClick={() => history.push("/user")}
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                  >Meu Perfil</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="lowerDiv">
                            <div>
                              <div>
                                <BiLogIn/>
                                <a
                                  style={{ fontFamily: "'Inter', sans-serif" }}
                                  className="options"
                                  onClick={() => logOff()}
                                >Sair</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Container>
                    </Box>
                  </Fade>
                </ModalSidebar>
              </div>
            </div>
          )}
        </div>
      </div>
    </HeadeMain>
  );
};