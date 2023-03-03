import { Container, Content } from "./styles.js";
import { MdClose } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useEffect, useState } from "react";

function ModalCreateAd({ handleCloseModal }: any) {
  const [saleType, setSaleType] = useState("sale");
  const [vehicleType, setVehicleType] = useState("Carro");
  const [images, setImages] = useState([""]);

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    price: yup.string().required(),
    description: yup.string().required(),
    year: yup.string().required(),
    kilometers: yup.string().required(),
    urlImage: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    data.saleType = saleType;
    data.vehicleType = vehicleType;
    data.imagesUrl = images
    console.log(data);
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
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="headerForm">
            <h2 id="title-7-500">Criar anuncio</h2>
            <MdClose
              className="closeButton"
              onClick={() => handleCloseModal()}
            />
          </div>
          <div className="saleType">
            <h3 id="text-2-500">Tipo de anúncio</h3>
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
          <h3 id="text-2-500">Infomações do veículo</h3>
          <label className="mainLabel" id="input-label">Título</label>
          <input
            className="tittleInput"
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
                {...register("kilometers")}
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
          <label className="mainLabel" id="input-label">Descrição</label>
          <input
            className="descriptionInput"
            id="input-placeholder"
            type="text"
            placeholder="Digitar descrição"
            {...register("description")}
          />
          <div className="vehicleType">
            <h3 id="text-2-500">Tipo de veículo</h3>
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
          <div className="divVehicleImage">
            <label className="mainLabel" id="input-label">Imagem da capa</label>
            <input
              id="input-placeholder"
              type="text"
              placeholder="Inserir URL da imagem"
              {...register("urlImage")}
            />
          </div>
          {images.map((image, index) => (
            <div key={index} className="imageField">
              <label className="mainLabel">{index+1}ª imagem da galeria</label>
              <input type="text" onChange={(e) => handleChangeImage(e,index)} placeholder="Inserir URL da imagem" />
            </div>
          ))}
          <div className="addImageDiv">
            <button className="addImage" type="button" onClick={addImages}>
              Adicionar campo para imagem da galeria
            </button>
          </div>
          <div className="footerButtons">
            <button className="cancelButton" onClick={handleCloseModal}>Cancelar</button>
            <button className="createButton" type="submit">Criar anúncio</button>
          </div>
        </form>
      </Content>
    </Container>
  );
}

export default ModalCreateAd;
