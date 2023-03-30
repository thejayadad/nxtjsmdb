
import axios from "axios"

export const getAllPost = async () => {
    const res = await axios.get("http://localhost:3000/api/posts")
    if(res.status !== 200){
        return new Error("Internal Server Error")
    }
    const data = await res.data?.posts;

    return data;
}

export const getFeaturedPosts = async ()=> {
    const posts = await getAllPost();
    if(posts.length == 0){
        return [];
    }

    const featuredPosts = posts.filter((post) => post.featured === true)

    return featuredPosts;
}

export const sendPost = async (data)=> {
    const res = await axios.post("http://localhost:3000/api/posts", {
        title: data.title,
        content: data.content,
        featured: data.featured
    })

    if(res.status !== 200){
        return new Error("Rejected by the database")
    }
    const resData = await res.data;
    return resData
}