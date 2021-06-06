import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/fetch'
import { POST } from '../../types/Types'

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

const PostDetaile: React.FC<POST> = ({ id, title, body }) => {
  return (
    <Layout title={title}>
      <p className="m-4">
        {'ID : '}
        {id}
      </p>
      <p className="mb-4 text-xl font-bold">{title}</p>
      <p className="mx-10 mb-12">{body}</p>
      <Link href="/blog-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <a data-testid="back-blog">Back to blog-page</a>
        </div>
      </Link>
    </Layout>
  )
}

export default PostDetaile

// npm run build の際に実行される。

// GetStaticProps
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds() // idの一覧を取得する。
  return {
    paths,
    fallback: false, // blogのデータが動的に増える場合はtrueにする。
  }
}
// ctx = contextにはparamsの情報が入っている。
// pathsで取得したidを取得できる。
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { post } = await getPostData(ctx.params.id as string)
  console.log(post)
  return {
    props: {
      ...post, // スプレッドで分解しPostDetaileにpropsで渡す。
    },
  }
}
