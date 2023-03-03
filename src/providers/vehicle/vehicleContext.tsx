import axios from "axios";
import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { IVehicleProvidersProps } from "../../interfaces/vehicle";

export const AuthContext = createContext({})

export const VehicleProvider = ({children}: IVehicleProvidersProps) =>{

    const history = useHistory() as any

    // const [vehicle, setVehicle] = useState([])
    const [cars, setCar] = useState([])
    const [motorcycles, setMotorcycles] = useState([])

    // const getVehicle = () =>{
    //     axios.get("http://localhost:3000/vehicles")
    //     .then((response) => {
    //         setVehicle(response.data)
    //     })
    //     .catch((err) =>{
    //         console.log(err)
    //     })
    // }

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
        }}>
            {children}
        </AuthContext.Provider>
    )
}

