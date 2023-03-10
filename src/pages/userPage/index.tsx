import { Header } from "../../components/Header";
import { StyleUserPage } from "./style";
import { Footer } from "../../components/Footer";
import { UserCard } from "../../components/UserCard";
import { Cars } from "../../components/Cars";
import { ProductAuction } from "../../components/Auction";
import { Motorcycles } from "../../components/Motorcycles";
import { useState } from "react";
import Modal from "react-modal";
import ModalCreateAd from "../../components/ModalCreateAd/ModalCreateAd";
import { VehicleProvider } from "../../providers/vehicle/vehicleContext";


type customStyleType = {
  content: any;
  overlay: any;
};

export const UserPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [customStyle, setCustomStyle] = useState<customStyleType>();

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }
 
  VehicleProvider

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

  return (
    <>
      <Header />
      <StyleUserPage>
        <Modal
          style={customStyles}
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
        >
          <ModalCreateAd handleCloseModal={handleCloseModal} />
        </Modal>
        <div id="blue-background">
          <UserCard handleOpenModal={handleOpenModal} />
        </div>
        <div id="container-auction">
          <ProductAuction />
        </div>
        <div id="container-cars">
          <Cars />
        </div>
        <div id="container-motorcycles">
          <Motorcycles />
        </div>
      </StyleUserPage>
      <Footer />
    </>
  );
};
