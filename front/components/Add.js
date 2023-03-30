import React from 'react'
import Form from './Form'
import { sendPost } from '../api-helpers/frontend/utils'
import { useRouter } from 'next/router'

const Add = () => {
  const router = useRouter();
    const getFormData = (data) => {
        sendPost(data).then((value) => console.log(value))
        router.push("/posts")
        .catch(err=> console.log(err))
    }

  return (
    <div>

        <Form onSubmit={getFormData} />
    </div>
  )
}

export default Add