
import { getFeaturedPosts } from "../api-helpers/frontend/utils"
import Header from "../components/Header";
import PostList from "../components/PostList";

export default function Home({posts}) {
  return (
    <div>
      <h2>Home</h2>
      <Header />
      <PostList getFeaturedPosts data={posts} />
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getFeaturedPosts();

  return {
    props: {
      posts,
    }
  }

}