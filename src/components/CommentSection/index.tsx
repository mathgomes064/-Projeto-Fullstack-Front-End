import { Container } from "./style";

export const CommentsSection = ({ comment } :any) => {

  const getInitial = (username : string) => {
    const nameSplits = username.split(" ")
    let initials = ""
    nameSplits.forEach((nameSplit : any) => {
      initials += nameSplit.charAt(0)
    })
    return initials
  }

  return (
    <>
      <Container>
        <div id="wrapper-coments">
          <h2 id="title-6-600">Comentários</h2>
          <div id="comment-info">
            <div id="profile-pic">{getInitial(comment.user.name)}</div>
            <h3 id="text-2-500">{comment.user.name}</h3>
            <div id="circle">.</div>
            <span id="comment-time">{comment.created_at.slice(0, 10)}</span>
          </div>
          <div id="coment">
            <p id="text-2-400">
            {comment.description}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};