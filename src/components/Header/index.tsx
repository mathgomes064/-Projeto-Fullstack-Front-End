import { HeadeMain } from "./style"
import logo from "../../assets/logo.png";
import userImage from "../../assets/user.jpg"
import { VscThreeBars } from 'react-icons/vsc';
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { UserContext } from "../../providers/user/userContext";

export const Header = () =>{
    const [activeDropDown, setActiveDropDown] = useState(false)
    const [activeItemsDropdown, setActiveItemsDropdown] =useState(false)

    const {token, getUserData, user} : any = useContext(UserContext)
    
    const history = useHistory()

    const logOff = () =>{
        setActiveDropDown(false)
        localStorage.clear()
        location.reload()
        history.push("/")
    }

    useEffect(()=> {getUserData()}, [])

    return(
        <HeadeMain>
            <div className="container">
                <img src={logo} alt=""  onClick={() => history.push("/")}/>
                <div className="buttonSection">

                    <VscThreeBars onClick={() => setActiveItemsDropdown(true)} className="dropdown"/>
                    {activeItemsDropdown?
                    (
                    <div className="userItemsDropDown" id='dropDown'>
                        <ol>
                            <li>Carros</li>
                            <li>Motos</li>
                            <li>Leilão </li>
                            <li className="upperLine">
                                <a href="">Fazer Login</a>
                            </li>
                            <button >Cadastrar</button>
                        </ol>
                    </div>
                    )
                    :
                    (
                        ""
                    )
                    }
                    <div className="productLinks">
                        <a href="">Carros</a>
                        <a href="">Motos</a>
                        <a href="">Leilão</a>
                    </div>
                    {token === null?
                     (
                     <div className="buttons">
                        <button onClick={() => history.push("/login")}>Fazer Login</button>
                        <button onClick={() => history.push("/register")}>Cadastrar</button>
                     </div>
                    )
                     :
                    (
                    <div className="userInfo">
                        <div>
                            <img className="userImg" src={userImage} alt="" />
                            <h1 onClick={() => setActiveDropDown(true)}>{user.name}</h1>
                            {activeDropDown?
                            (
                            <div className="userDropDown" id='dropDown'>
                                <ol>
                                    <li className="options">Editar Perfil</li>
                                    <li className="options">Editar Endereço</li>
                                    <li className="options">Minhas Compras</li>
                                    <li className="options" onClick={() => history.push("/user")}>Meu Perfil</li>
                                    <li className="options" onClick={() => logOff()} > Sair</li>
                                </ol>
                            </div>
                            )
                            :
                            (
                                ""
                            )
                            }
                        </div>
                    </div>
                     )
                     }
                    
                    
                </div>
            </div>
        </HeadeMain>
    )
}