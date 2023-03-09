import { Container, Content, ModalButton } from "./styles.js";
import { MdClose } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import { AuthContext } from "../../providers/vehicle/vehicleContext.js";


export const ModalEditAdButton = () => {
  const [saleType, setSaleType] = useState("sale");
  const [vehicleType, setVehicleType] = useState("carro");
  const [published, setpublished] = useState(true);
  const [images, setImages] = useState([""]);
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    price: yup.string().required(),
    description: yup.string().required(),
    year: yup.string().required(),
    mileage: yup.string().required(),
    urlImage: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {id, updateVehicle}: any = useContext(AuthContext)

  const onSubmitFunction = (data: any) => {
    data.saleType = saleType;
    data.type = vehicleType;
    data.imagesUrl = images
    data.published = published
    delete data.imagesUrl
    delete data.saleType
    delete data.published
    updateVehicle(data, id)
    location.reload()
  };

  const addImages = () => {
    setImages([...images, ""]);
    console.log(images);
  };

  const handleChangeImage = (e:any,index:any) =>{
    images[index] = e.target.value;
    setImages([...images])
  }

  return (
    <>
      <ModalButton onMouseDown={handleOpen}>Editar</ModalButton>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Container>
              <Content>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                  <h2 className="headerForm">Editar anuncio</h2>
                  <div className="saleType">
                    <h3>Tipo de anúncio</h3>
                    <div className="saleButtons">
                      {/* <input type="hidden" value={saleType} {...register("saleType")} /> */}
                      <button
                        className={saleType === "sale" ? "selected" : "notSelected"}
                        type="button"
                        onClick={() => setSaleType("sale")}
                      >
                        Venda
                      </button>
                      <button
                        className={saleType === "sale" ? "notSelected" : "selected"}
                        type="button"
                        disabled
                        onClick={() => setSaleType("auction")}
                      >
                        Leilão
                      </button>
                    </div>
                  </div>
                  <h3>Infomações do veículo</h3>
                  <label id="input-label">Título</label>
                  <input
                    id="input-placeholder"
                    type="text"
                    placeholder="Digitar título"
                    {...register("title")}
                  />
                  <div className="vehicleInformation">
                    <div className="divVehicle-1">
                      <label id="input-label">Ano</label>
                      <input
                        id="input-placeholder"
                        type="text"
                        placeholder="Digitar ano"
                        {...register("year")}
                      />
                    </div>
                    <div className="divVehicle-2">
                      <label id="input-label">Quilometragem</label>
                      <input
                        id="input-placeholder"
                        type="text"
                        placeholder="0"
                        {...register("mileage")}
                      />
                    </div>
                    <div className="divVehicle-3">
                      <label id="input-label">Preço</label>
                      <input
                        id="input-placeholder"
                        type="text"
                        placeholder="Digitar preço"
                        {...register("price")}
                      />
                    </div>
                  </div>
                  <label id="input-label">Descrição</label>
                  <input
                    id="input-placeholder"
                    type="text"
                    placeholder="Digitar descrição"
                    {...register("description")}
                  />
                  <div className="vehicleType">
                    <h3 id="text-2-500">Tipo de anúncio</h3>
                    <div className="vehicleButtons">
                      <button
                        className={vehicleType === "Carro" ? "selected" : "notSelected"}
                        type="button"
                        onClick={() => setVehicleType("Carro")}
                      >
                        Carro
                      </button>
                      <button
                        className={vehicleType === "Carro" ? "notSelected" : "selected"}
                        type="button"
                        onClick={() => setVehicleType("Moto")}
                      >
                        Moto
                      </button>
                    </div>
                  </div>
                  <div className="vehicleType">
                    <h3 id="text-2-500">Publicado</h3>
                    <div className="vehicleButtons">
                      <button
                        className={published === true ? "selected" : "notSelected"}
                        type="button"
                        onClick={() => setpublished(true)}
                      >
                        Sim
                      </button>
                      <button
                        className={published === true ? "notSelected" : "selected"}
                        type="button"
                        onClick={() => setpublished(false)}
                      >
                      Não
                      </button>
                    </div>
                  </div>
                  <div className="divVehicle">
                    <label id="input-label">Imagem da capa</label>
                    <input
                      id="input-placeholder"
                      type="text"
                      placeholder="Inserir URL da imagem"
                      {...register("urlImage")}
                    />
                  </div>
                  {images.map((image, index) => (
                    <div key={index} className="imageField">
                      <label>{index+1}ª imagem da galeria</label>
                      <input type="text" onChange={(e) => handleChangeImage(e,index)} placeholder="Inserir URL da imagem" />
                    </div>
                  ))}
                  <button className="addButton" type="button" onClick={addImages}>
                    Adicionar campo para imagem da galeria
                  </button>
                  <div className="footerButtons">
                    <button onClick={() => handleClose()}>Cancelar</button>
                    <button type="submit">Editar anúncio</button>
                  </div>
                </form>
              </Content>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

