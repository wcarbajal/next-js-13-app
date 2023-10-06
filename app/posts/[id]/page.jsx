'use client'
import React, { useEffect, useState } from 'react'

export default function PostPage({ params }) {

    const {id} = params
  return (
    <h1>Esto es un post {id}</h1>
  )
}
