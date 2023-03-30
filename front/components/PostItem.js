import React from 'react'
import Link from "next/link"
const PostItem = ({title, content, id, featured}) => {
  return (
    <div>
        <h2>Post Items</h2>
        <h3>{title}</h3>
        <p>{content}</p>
        <h5>{featured}</h5>
        <Link href={`/api/posts/${id}`}>
        Edit
        </Link>
    </div>
  )
}

export default PostItem