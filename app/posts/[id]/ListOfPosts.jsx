import React from 'react'
import { LikeButton } from './LikeButton'


const fetchPosts = () => {
    return fetch('https://jsonplaceholder.org/posts')
        .then(res => res.json())
}

export async function ListOfPosts() {


    const posts = await fetchPosts()
    return (
        posts.slice(0, 5).map((post) => (
            <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <LikeButton />
            </article>
        ))

    )
}
