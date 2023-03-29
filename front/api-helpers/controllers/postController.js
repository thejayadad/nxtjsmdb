import Post from "../models/Post"

export const getAllPosts = async(req, res) => {
    let posts;

    try {
        posts = await Post.find();
    } catch (error) {
        return new Error(error);
    }

    if(!posts){
        return res.status(500).json({message: "Server Error"})
    }
    return res.status(200).json({posts})
}

export const addPost = async (req, res) => {

}