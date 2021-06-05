import fetch from 'node-fetch'

export const getAllPostsData = async () => {
  const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/posts/?_limit=10')
  )
  const posts = await res.json() // jsonフォーマットに変更
  return posts
}

export const getAllTasksData = async () => {
  const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/todos/?_limit=10')
  )
  const tasks = await res.json()
  return tasks
}

// Dynamic routes(詳細ページのpre-rendering)
// 以下を行うこと取得したデータをpropsでReact Componentに渡してpre-rendering(HTML事前生成)
export const getAllPostIds = async () => {
  const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/posts/?_limit=10')
  )
  const posts = await res.json()
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id), // API取得の際にid指定はstringでないといけないためStringにキャスト
      },
    }
  })
}

export const getPostData = async (id: string) => {
  const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/posts/?_limit=10')
  )
  const post = await res.json()
  return post
}
