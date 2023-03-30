import React from 'react'
import Form from './Form'
import { sendPost } from '../api-helpers/frontend/utils'

const Add = () => {

    const getFormData = (data) => {
        sendPost(data).then((value) => console.log(value)).catch(err=> console.log(err))
    }

  return (
    <div>

        <Form onSubmit={getFormData} />
    </div>
  )
}

export default Add