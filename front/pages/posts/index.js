import { getAllPost } from "../../api-helpers/frontend/utils";
import PostList from "../../components/PostList";


function PostHome({posts}){
    return (
        <div>
            <h2>Post Home</h2>
            <PostList data={posts} />
        </div>
    )
}

export default PostHome;


export const getStaticProps = async () => {
    const posts = await getAllPost()

    return {
        props: {
            posts,
        }
    }
}