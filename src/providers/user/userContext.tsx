import { createContext, useState } from "react"
import axios from "axios";
import { IUserLogin, IUserProvidersProps, IUserUpdate } from "../../interfaces/user";
import { IUserCreate } from "../../interfaces/user";
import { useHistory } from "react-router-dom";

export const UserContext = createContext({})

export const UserProvider = ({children}: IUserProvidersProps) =>{

    const history = useHistory() as any
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    const [token, setToken] = useState(
        JSON.parse(localStorage.getItem("@user_data:token") as string)
    )

    const registerUser = (data: IUserCreate) =>{
        axios.post("http://localhost:3000/user", data)
        .then((response) => setTimeout(history.push("/login"), 5000))
        .catch((err) => console.log(err))
    }

    const loginUser = (data: IUserLogin) =>{
        axios.post("http://localhost:3000/login", data)
        .then((response)=>{
            localStorage.setItem(
                "@user_data:token",
                JSON.stringify(response.data.token)
            )
            setToken(response.data.token)
        })
        .then((response) => history.push("/"))
        .catch((err) => console.log(err))
    }

    const getUserData = () =>{
        axios.get("http://localhost:3000/user/me", {
            headers:{
                Authorization: token
            },
        })
        .then((response) =>{
            setUser(response.data)
        })
        .then((response) => setLoading(false))
        .catch((err) =>{
            console.log(err)
        })
    }

    const updateUserData = (data:IUserUpdate,id:string) =>{
        axios.patch(`http://localhost:3000/user/${id}`, data ,{
            headers:{
                Authorization: token
            },
        })
        .then((response) => response)
        .catch((err) =>{
            console.log(err)
        })
    }
  
    return(
        <UserContext.Provider
        value={{
            registerUser,
            loginUser,
            setToken,
            token,
            getUserData,
            user,
            loading,
            updateUserData,
        }}
        >
            {children}
        </UserContext.Provider>
    )
}