import Layout from '../components/Layout'
import { getAllPostsData } from '../lib/fetch'
import Post from '../components/Post'
import { GetStaticProps } from 'next'
import { POST } from '../types/Types'

interface STATCPROOPS {
  posts: POST[]
}

const BlogPage: React.FC<STATCPROOPS> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <p className="text-4xl mb-10">blog page</p>
      <ul>{posts && posts.map((post) => <Post key={post.id} {...post} />)}</ul>
    </Layout>
  )
}
export default BlogPage

// アプリケーションがビルドされた時に以下が呼び出される。
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData()
  return {
    props: { posts },
  }
}
