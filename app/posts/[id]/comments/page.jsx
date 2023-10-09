import React from 'react'

const fetchComments = () => {
  return fetch(`https://jsonplaceholder.org/comments`, {
    next: {
      revalidate: 60
    }
  }).then(res => res.json());
};
export default async function CommentsPage({ params }) {

  const { id } = params;
  let comments = [{}];

  comments = await fetchComments();
 

    const commentariosfiltrado = comments.filter( comentario => {
    if (comentario.postId == id) {
      return true
    } else {
      return false
    }
  })  

   
  return (
    ( commentariosfiltrado.length != 0 )
    ?    <ul>
    {
      commentariosfiltrado.map(comment =>(
        <li key={comment.id}>
        <h2>Id: {comment.id}</h2>   
        <h3>PostId: {comment.postId}</h3>
        <h3>UserId: {comment.userId}</h3>
        <p>{comment.comment}</p>
        </li>
      ))
      
    }
   </ul>
    : <p>No hay comentarios</p>
  );
}