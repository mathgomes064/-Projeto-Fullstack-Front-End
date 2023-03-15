import { Content, EditAddressButton } from "./style"
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user/userContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdClose } from "react-icons/md";

export const NewModalEditAddress = () =>{
    const { updateUserData, user }: any = useContext(UserContext);

    const schema = yup.object().shape({
        cep: yup.string().required("Campo Obrigatório"),
        state: yup.string().required("Campo Obrigatório"),
        city: yup.string().required("Campo Obrigatório"),
        number: yup.string().required("Campo Obrigatório"),
        street: yup.string().required("Campo Obrigatório"),
    });
    
    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm({
    resolver: yupResolver(schema),
    });

    const onSubmitFunction = (data: any) => {
        const treatedData = {
          address: {
            cep: data.cep,
            state: data.state,
            city: data.city,
            number: data.number,
            complement: data.complement,
            street: data.street,
          },
        };
        updateUserData(treatedData, user.id);
        location.reload();
    };


    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }
    return(
        <div>
            <EditAddressButton onMouseDown={handleOpen}>Editar Endereço</EditAddressButton>
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
                <Content>
                    <form onSubmit={handleSubmit(onSubmitFunction)}>
                        <div className="headerForm">
                        <h2 id="title-7-500">Editar endereço</h2>
                        <MdClose
                            className="closeButton"
                            onClick={() => handleClose()}
                        />
                        </div>
                        <label id="input-label">CEP</label>
                        <input
                        id="input-placeholder"
                        type="text"
                        placeholder="Digitar cep"
                        {...register("cep")}
                        defaultValue={user.address.cep}
                        />
                        <div className="flexDiv">
                            <div className="divVehicle-1">
                                <label id="input-label">Estado</label>
                                <input
                                id="input-placeholder"
                                type="text"
                                placeholder="Digitar email"
                                {...register("state")}
                                defaultValue={user.address.state}
                                />
                            </div>
                            <div className="divVehicle-1">
                                <label id="input-label">Cidade</label>
                                <input
                                id="input-placeholder"
                                type="text"
                                placeholder="Digitar cidade"
                                {...register("city")}
                                defaultValue={user.address.city}
                                />
                            </div>
                        </div>
                        <label id="input-label">Rua</label>
                        <input
                        id="input-placeholder"
                        type="text"
                        placeholder="Digitar sua rua"
                        {...register("street")}
                        defaultValue={user.address.street}
                        />
                        <div className="flexDiv">
                        <div className="divVehicle-1">
                            <label id="input-label">Número</label>
                            <input
                            id="input-placeholder"
                            type="text"
                            placeholder="Digitar número"
                            {...register("number")}
                            defaultValue={user.address.number}
                            />
                        </div>
                        <div className="divVehicle-1">
                            <label id="input-label">Complemento</label>
                            <input
                            id="input-placeholder"
                            type="text"
                            placeholder="Digitar complemento"
                            {...register("complement")}
                            defaultValue={user.address.complement}
                            />
                        </div>
                        </div>
                        <div className="footerButtons">
                        <button className="close" onClick={handleClose}>Cancelar</button>
                        <button className="update" type="submit">Salvar alterações</button>
                        </div>
                    </form>
                    </Content>
                </Box>
                </Fade>
            </Modal>

        </div>
    )
}