import React from 'react'

const PostItem = ({title, content}) => {
  return (
    <div>
        <h2>Post Items</h2>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default PostItem