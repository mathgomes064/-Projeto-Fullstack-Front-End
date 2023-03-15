import { Container } from "react-bootstrap"
import { Content, EditProfileButton } from "./style"
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user/userContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdClose } from "react-icons/md";


export const NewModalEditProfile = () =>{
    const {updateUserData,user}: any = useContext(UserContext)

    const schema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        email: yup.string().required(),
        cpf: yup.string().required(),
        cellPhone: yup.string().required(),
        birthDate: yup.string().required(),
        description: yup.string().required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitFunction = (data: any) => {
        updateUserData(data,user.id)
        location.reload()
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
            <EditProfileButton onMouseDown={handleOpen}>Editar Perfil</EditProfileButton>
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
                                    <h2 id="title-7-500">Editar perfil</h2>
                                    <MdClose
                                    className="closeButton"
                                    onClick={() => handleClose()}
                                    />
                                </div>
                                <label id="input-label">Nome</label>
                                <input
                                    id="input-placeholder"
                                    type="text"
                                    placeholder="Digitar nome"
                                    {...register("name")}
                                    defaultValue={user.name}
                                />
                                <label id="input-label">Email</label>
                                <input
                                    id="input-placeholder"
                                    type="text"
                                    placeholder="Digitar email"
                                    {...register("email")}
                                    defaultValue={user.email}
                                />
                                <label id="input-label">CPF</label>
                                <input
                                    id="input-placeholder"
                                    type="text"
                                    placeholder="Digitar seu cpf"
                                    {...register("cpf")}
                                    defaultValue={user.cpf}
                                />
                                <label id="input-label">Celular</label>
                                <input
                                    id="input-placeholder"
                                    type="text"
                                    placeholder="Digitar seu telefone"
                                    {...register("cellPhone")}
                                    defaultValue={user.cellPhone}
                                />
                                <label id="input-label">Data de nascimento</label>
                                <input
                                    id="input-placeholder"
                                    type="text"
                                    placeholder="Digitar data de nascimento"
                                    {...register("birthDate")}
                                    defaultValue={user.birthDate}
                                />
                                <label id="input-label">Descrição</label>
                                <input
                                    id="input-placeholder"
                                    type="text"
                                    placeholder="Digitar descrição"
                                    {...register("description")}
                                    defaultValue={user.description}
                                />
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