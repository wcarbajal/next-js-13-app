
import React, { Suspense } from 'react'
import { ListOfPosts } from './[id]/ListOfPosts'


export default async function PostPage({params}) {
  
  return (
    <secion >
      <Suspense fallback={<p>Cargando posts ...</p>}>
        <ListOfPosts />
        </Suspense>
    </secion>
  )
}
