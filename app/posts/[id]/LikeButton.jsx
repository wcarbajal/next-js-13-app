'use client'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const LikeButton = () => {

const [liked, setLiked] = useState(false)

return (
    <button onClick={() => setLiked(!liked)}>{liked ? <FaHeart style={{color:'red'}}/> : <FaRegHeart  />}</button>
)

}
