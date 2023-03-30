import React, { useEffect, useState } from 'react'
import {useRouter} from "next/router"
import Form from './Form';
import { getPostFromId, updatePost } from '../api-helpers/frontend/utils';

const PostDetail = () => {
    const [post, setPost] = useState()
    const router = useRouter();
    const id = router.query.id;
    useEffect(() => {
        getPostFromId(id)
            .then((data) => setPost(data))
            .catch((err) => console.log(err))
    }, [router.query.id])

    const getFormData = (data) => {
        updatePost(id, data)
            .then((value ) => console.log(value)).then(() => {
                router.push("/posts")
            } )
            .catch(err => console.log(err))
    }

  return (
    <div>
        <h2>Post detail</h2>
        {post ? (<Form data={post} onSubmit={getFormData}/>

        ) : (
            <p>Unable to load Post</p>
        )
    }
    </div>
  )
}

export default PostDetail