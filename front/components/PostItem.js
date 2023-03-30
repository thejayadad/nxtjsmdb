import React from 'react'
import Link from "next/link"
import { deletePost } from '../api-helpers/frontend/utils'
import { useRouter } from 'next/router'


const PostItem = ({title, content, id, featured}) => {
  const router = useRouter();
  const handleDelete = () => {
    deletePost(id).then(value=> console.log(value))
      router.push("/posts")

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