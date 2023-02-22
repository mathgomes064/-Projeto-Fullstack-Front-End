import { HeadeMain } from "./style"
import logo from "../../assets/logo.png";
import user from "../../assets/user.jpg"
import { VscThreeBars } from 'react-icons/vsc';
import { useState } from "react";

export const Header = () =>{
    const [isLogged, setIsLogged] = useState(true)
    const [activeDropDown, setActiveDropDown] = useState(false)
    const [activeItemsDropdown, setActiveItemsDropdown] =useState(false)

    const logOff = () =>{
        setActiveDropDown(false)
        setIsLogged(true)
    }


    return(
        <HeadeMain>
            <div className="container">
                <img src={logo} alt="" />
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
                    {isLogged?
                     (
                     <div className="buttons">
                        <button onClick={() => setIsLogged(false)}>Fazer Login</button>
                        <button>Cadastrar</button>
                     </div>
                    )
                     :
                    (
                    <div className="userInfo">
                        <div>
                            <img className="userImg" src={user} alt="" />
                            <h1 onClick={() => setActiveDropDown(true)}>Samuel Leão</h1>
                            {activeDropDown?
                            (
                            <div className="userDropDown" id='dropDown'>
                                <ol>
                                    <li>Editar Perfil</li>
                                    <li>Editar Endereço</li>
                                    <li>Minhas Compras</li>
                                    <li className="out" onClick={() => logOff()}  > Sair</li>
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