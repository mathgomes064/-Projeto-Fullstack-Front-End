import { Container, Content } from "./styles.js";
import { MdClose } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";

function ModalCreateAd({ handleCloseModal  }:any) {
  const [saleType, setSaleType] = useState("sale");
  const [vehicleType, setVehicleType] = useState("carro");

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    console.log(data);
  };

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
              <button
                className={saleType === "sale" ? "selected" : "notSelected"}
                onClick={() => setSaleType("sale")}
              >
                Venda
              </button>
              <button
                className={saleType === "sale" ? "notSelected" : "selected"}
                onClick={() => setSaleType("auction")}
              >
                Leilão
              </button>
            </div>
          </div>
          <h3 id="text-2-500">Infomações do veículo</h3>
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
                name="year"
              />
            </div>
            <div className="divVehicle-2">
              <label id="input-label">Quilometragem</label>
              <input
                id="input-placeholder"
                type="text"
                placeholder="0"
                name="kilometers"
              />
            </div>
            <div className="divVehicle-3">
              <label id="input-label">Preço</label>
              <input
                id="input-placeholder"
                type="text"
                placeholder="Digitar preço"
                name="price"
              />
            </div>
          </div>
          <label id="input-label">Descrição</label>
          <input
            id="input-placeholder"
            type="text"
            placeholder="Digitar descrição"
            name="description"
          />
          <div className="vehicleType">
            <h3 id="text-2-500">Tipo de anúncio</h3>
            <div className="vehicleButtons">
              <button
                className={vehicleType === "carro" ? "selected" : "notSelected"}
                onClick={() => setVehicleType("carro")}
              >
                Carro
              </button>
              <button
                className={vehicleType === "carro" ? "notSelected" : "selected"}
                onClick={() => setVehicleType("moto")}
              >
                Moto
              </button>
            </div>
          </div>
          <div className="divVehicle-1">
            <label id="input-label">Imagem da capa</label>
            <input
              id="input-placeholder"
              type="text"
              placeholder="Inserir URL da imagem"
              name="year"
            />
          </div>
          <div className="footerButtons">
            <button onClick={handleCloseModal}>Cancelar</button>
            <button type="submit">Criar anúncio</button>
          </div>
        </form>
      </Content>
    </Container>
  );
}

export default ModalCreateAd;
