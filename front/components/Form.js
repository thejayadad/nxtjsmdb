import React, {useState} from 'react'

const Form = ({data, onSubmit}) => {
    const [inputs, setInputs] = useState(
        data ? {
            title: data.title,
            content: data.content,
            featured: data.featured
        } : {
            title: "",
            content: "",
            featured: ""
        }
    )

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        onSubmit(inputs)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>{data ? "Post detail" : "Add Post"}</h2>
            <input
                name="title"
                placeholder='Title'
                onChange={handleChange}
                value={inputs.title}
            />
               <input
                name="content"
                placeholder='Content'
                onChange={handleChange}
                value={inputs.content}
            />
               <input
                name="featured"
                placeholder='Featured'
                onChange={handleChange}
                value={inputs.featured}
            />
            <button type='submit'> submit</button>
        </form>


    </div>
  )
}

export default Form