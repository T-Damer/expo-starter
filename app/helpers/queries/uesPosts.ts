import { useQuery } from 'urql'
import { graphql } from 'gql.tada'

const stringQuery = `
  query FeedPosts {
    posts {
      id
      title
      createdAt
      author {
        id
        email
      }
    }
  }
`
export const postsQuery = graphql(stringQuery)

export default function usePosts() {
  const [result] = useQuery({
    query: postsQuery,
  })

  return result
}