import { Header } from "../../components/Header";
import { StyleUserPage } from "./style";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { VehicleProvider } from "../../providers/vehicle/vehicleContext";
import { SellerCard } from "../../components/SellerCard";
import { SellerCars } from "../../components/SellerCars";
import { SellerMotorcycles } from "../../components/SellerMotorcycles";
import { useParams } from "react-router";
import api from "../../service";


type customStyleType = {
  content: any;
  overlay: any;
};

export const SellerPage = () => {
  VehicleProvider

  const params = useParams();


  const [seller, setSeller] = useState()

  useEffect(() => {
      api
        .get("/user/"+params.id)
        .then((res) => {
          console.log(seller != undefined)

          console.log(seller.vehicle != undefined)
          setSeller(res.data);
        })
        .catch((err) => {
            alert("Vendedor não encontrado.")
        }); 
    }, [setSeller]);



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
  if (seller != undefined && seller.vehicle != undefined){
    console.log(seller.vehicle)
    return (
      <>
        <Header />
        <StyleUserPage>
          <div id="blue-background">
            <SellerCard seller={seller}/>
          </div>
          <div id="container-cars">
            <SellerCars cars={seller.vehicle.filter((car) => car.type=="Carro")}/>
          </div>
          <div id="container-motorcycles">
            <SellerMotorcycles motos={seller.vehicle.filter((moto) => moto.type=="Moto")}/>
          </div>
        </StyleUserPage>
        <Footer />
      </>
    );
  }
  return <>Nenhum vendedor encontrado</>
};
