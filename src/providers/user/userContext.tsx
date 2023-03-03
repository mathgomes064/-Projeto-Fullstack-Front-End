import { createContext } from "react"
import axios from "axios";
import { IUserProvidersProps } from "../../interfaces/user";
import { IUserCreate } from "../../interfaces/user";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext({})

export const userProvider = ({children}: IUserProvidersProps) =>{

    const history = useHistory() as any

    const registerUser = (data: IUserCreate) =>{
        axios.post("http://localhost:3000/user", data)
        .then((response) => setTimeout(history.push("/login"), 5000))
        .catch((err) => console.log(err))
    }
    
    return(
        <AuthContext.Provider
        value={{
            registerUser
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}