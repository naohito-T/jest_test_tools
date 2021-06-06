import Layout from '../components/Layout'
import useSWR from 'swr'
import axios from 'axios'
import Comment from '../components/Comment'
import { COMMENT } from '../types/Types'

// useSWRで使う関数を定義
const axiosFetcher = async () => {
  const result = await axios.get<COMMENT[]>(
    'https://jsonplaceholder.typicode.com/comments/?_limit=10'
  )
  return result.data
}

const CommentPage: React.FC = () => {
  // useSWR 第一 key(好きな名前) 第二 処理
  const { data: commnets, error } = useSWR('commentsFetch', axiosFetcher)

  if (error) return <span>Error!</span>

  return (
    <Layout title="Comment">
      <p className="text-4xl m-10">comment page</p>
      <ul>
        {commnets &&
          commnets.map((comment) => <Comment key={comment.id} {...comment} />)}
      </ul>
    </Layout>
  )
}
export default CommentPage
