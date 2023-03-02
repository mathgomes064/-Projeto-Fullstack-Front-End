import { createContext } from "react"
import axios from "axios";
import { IUserProvidersProps } from "../../interfaces/user";

export const AuthContext = createContext({})

export const userProvider = ({children}: IUserProvidersProps) =>{

    

    return(
        <AuthContext.Provider
        value={{

        }}
        >
            {children}
        </AuthContext.Provider>
    )
}