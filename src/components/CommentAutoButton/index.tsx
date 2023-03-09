import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../service";
import { Container } from "./style"

export const CommentAutoButton = ({text}) => {

  const setComment = (text:string) => {
    const comment = document.getElementById("textComment") as HTMLInputElement
    comment.value = text
  };

    return (
      <>
        <button id="autoCommentButton" onClick = {() => {setComment(text)}}>{text}</button>
      </>
  );
};