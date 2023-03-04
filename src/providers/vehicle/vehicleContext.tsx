import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { IVehicleCreate, IVehicleProvidersProps } from "../../interfaces/vehicle";
import { UserContext } from "../user/userContext";

export const AuthContext = createContext({})

export const VehicleProvider = ({children}: IVehicleProvidersProps) =>{

    const {token, getUserData} : any = useContext(UserContext)


    const history = useHistory() as any

    // const [vehicle, setVehicle] = useState([])
    const [cars, setCar] = useState([])
    const [motorcycles, setMotorcycles] = useState([])
    const [vehicle, setVehicle] = useState<IVehicleCreate[]>([])

    // const getVehicle = () =>{
    //     axios.get("http://localhost:3000/vehicles")
    //     .then((response) => {
    //         setVehicle(response.data)
    //     })
    //     .catch((err) =>{
    //         console.log(err)
    //     })
    // }

    const registerVehicle = (data: IVehicleCreate) =>{
        setVehicle([data, ...vehicle])
        axios.post("http://localhost:3000/vehicles", data, {
            headers: {
                Authorization: token
            }
        })
        .then((response) =>{
            getUserData()
        })
        .catch((err) => console.log(err))
    }

    const getCars = () =>{
        axios.get("http://localhost:3000/vehicles/cars")
        .then((response) => {
            setCar(response.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    const getMotorcycles = () =>{
        axios.get("http://localhost:3000/vehicles/motorcycles")
        .then((response) => {
            setMotorcycles(response.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }


    return(
        <AuthContext.Provider
        value={{
            // getVehicle,
            // vehicle,
            getCars,
            cars,
            getMotorcycles,
            motorcycles,
            registerVehicle,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

