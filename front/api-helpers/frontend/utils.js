
import axios from "axios"

export const getAllPost = async () => {
    const res = await axios.get("http://localhost:3000/api/posts")
    if(res.status !== 200){
        return new Error("Internal Server Error")
    }
    const data = await res.data
}