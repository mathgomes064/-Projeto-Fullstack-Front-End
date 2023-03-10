import { Container } from "./style"
import { CommentsSection } from "../CommentSection";
import { useEffect, useState } from "react";
import api from "../../service";



export const CommentsBoard = ({vehicle_id}) => {

  
  const [comments, setComments] = useState([])


  const [msgToShow, setMsgToShow] = useState("Carregando...")
  useEffect(() => {
     api
       .get("/comment/"+vehicle_id)
       .then((res) => {
        setComments(res.data);
       })
       .catch((err) => {
           setMsgToShow("Nenhum carro encontrado.")
       });
   }, [setComments]);

    if(comments.length > 0) {
      return (
        <>
          <Container>
              <h1>Comentários</h1>
              {comments.map((comment: any, index: any) => (
                <CommentsSection key={comment.id} comment={comment}/>
              ))}
          </Container>
        </>
      );
    }
    
    return (
      <>
        <Container>
            <h1>Comentários</h1>
            Sem comentários
        </Container>
      </>
    );
    
  };