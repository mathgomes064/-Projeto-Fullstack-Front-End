import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../service";
import { CommentAutoButton } from "../CommentAutoButton";
import { Container } from "./style"

export const CommentCard = ({productId}) => {

  const sendComment = () => {
    const data = {
      "description" : document.getElementById("textComment").value,
	    "vehicle_id": productId
    }
    api
      .post("/comment/",data,{
        headers: { 
          "Content-type": "application/json",
          "Authorization": localStorage.getItem("@user_data:token") }
      })
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => {
          alert("Erro.")
      });
  };

    return (
      <>
        <Container>
            <div>
              <h1>Usuário</h1>
            </div>
            <div>
                <input id="textComment"></input>
                <button onClick={sendComment}>Enviar comentário</button>
            </div>
            <div>
              <CommentAutoButton text={"Gostei muito"}></CommentAutoButton>
              <CommentAutoButton text={"Incrível"}></CommentAutoButton>
              <CommentAutoButton text={"Recomendarei para meus amigos!"}></CommentAutoButton>
            </div>

        </Container>
      </>
    );
  };