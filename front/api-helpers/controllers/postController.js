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
    const {title, content} = req.body;

    let post;
    try {
        post = new Post({title, content})
        post = await post.save();
    } catch (error) {
        return new Error(error)
    }
    if(!post){
        return res.status(500).json({message: "Internal Server Error"})
    }
    return res.status(201).json({post})

}