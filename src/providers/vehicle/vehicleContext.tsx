import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { IVehicleCreate, IVehicleProvidersProps } from "../../interfaces/vehicle";
import { UserContext } from "../user/userContext";

export const AuthContext = createContext({})

export const VehicleProvider = ({children}: IVehicleProvidersProps) =>{

    const {token, getUserData, user} : any = useContext(UserContext)

    const [allCars, setAllCar] = useState([])
    const [allMotorcycles, setAllMotorcycles] = useState([])
    const [userCars, setUserCars] = useState([])
    const [userMotorcycles, setUserMotorcycles] = useState([])
    const [vehicle, setVehicle] = useState<IVehicleCreate[]>([])

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
            setAllCar(response.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    const getMotorcycles = () =>{
        axios.get("http://localhost:3000/vehicles/motorcycles")
        .then((response) => {
            setAllMotorcycles(response.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    const getCarsByUser = () =>{
        axios.get(`http://localhost:3000/vehicles/${user.id}/cars`, {
            headers:{
                Authorization: token
            },
        })
        .then((response) => {
            setUserCars(response.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    const getMotorcyclesByUser = () =>{
        axios.get(`http://localhost:3000/vehicles/${user.id}/motorcycles`, {
            headers:{
                Authorization: token
            },
        })
        .then((response) => {
            setUserMotorcycles(response.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }


    return(
        <AuthContext.Provider
        value={{
            getCars,
            userCars,
            getMotorcycles,
            userMotorcycles,
            registerVehicle,
            getCarsByUser,
            getMotorcyclesByUser,
            allCars,
            allMotorcycles,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

