import { Container } from "./style"
import { CommentsSection } from "../CommentSection";



export const CommentsBoard = () => {
    return (
      <>
        <Container>
            <h1>Comentários</h1>
            <CommentsSection/>
            <CommentsSection/>
            <CommentsSection/>   
        </Container>
      </>
    );
  };