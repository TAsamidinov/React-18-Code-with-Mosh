import React, { useState } from 'react'
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";



const Like = () => {
    const [liked, setLiked] = useState(false)
    if (liked) {
    return <FcLike size="50" onClick={() => setLiked(false)} />
    } else {
    return <CiHeart size="50" onClick={() => setLiked(true)} />
    }
}

export default Like
