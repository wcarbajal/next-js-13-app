import React from 'react'

export default function page({ params }) {
  const {id} = params
  return (
    <div>Esto es un post {id}</div>
  )
}
