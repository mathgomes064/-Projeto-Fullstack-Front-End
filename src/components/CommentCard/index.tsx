import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../service";
import { Container } from "./style"

export const CommentCard = () => {

  const sendComment = () => {
    const data = {
      "description" : document.getElementById("textComment").value,
	    "vehicle_id": "7c9b3017-caa9-4ea7-80ab-ae963411d882"
    }
    api
      .post("/comment/",data,{
        headers: { 
          "Content-type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}` }
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
        </Container>
      </>
    );
  };