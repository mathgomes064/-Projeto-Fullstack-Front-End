import { Container } from "./style"

export const CommentsSection = ({comment}) => {
  
    return (
      <>
        <Container>
            <div>
                <img></img>
                <h1>{comment.user.name}</h1>
                <h4>{comment.created_at.slice(0, 10)}</h4>
            </div>
            <div>
                 <p>{comment.description}</p>
            </div>
        </Container>
      </>
    );
  };