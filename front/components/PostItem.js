import React from 'react'
import Link from "next/link"
import { deletePost } from '../api-helpers/frontend/utils'

const PostItem = ({title, content, id, featured}) => {
  const handleDelete = () => {
    deletePost(id).then((value ) => console.log(value)).then(() => {
      router.push("/posts")
  } )
      .catch(err=> console.log(err))
  }
  return (
    <div>
        <h2>Post Items</h2>
        <h3>{title}</h3>
        <p>{content}</p>
        <h5>{featured}</h5>
        <Link href={`/posts/${id}`}>
        Edit
        </Link>
        <button
        onClick={handleDelete}
        >
          delete
        </button>
    </div>
  )
}

export default PostItem