import { graphql } from 'gql.tada'
import { useMutation, useQuery } from 'urql'

const stringQuery = graphql(`
  query FeedPosts {
    posts {
      id
      title
      author {
        id
      }
    }
  }
`)

const addPostQuery = graphql(`
  mutation AddPostMutation(
    $title: String!
    $author: UserCreateNestedOneWithoutPostsInput!
  ) {
    createOnePost(data: { title: $title, author: $author }) {
      updatedAt
      title
      id
      createdAt
      content
      authorId
    }
  }
`)

export const postsQuery = stringQuery

export default function usePosts() {
  const [addedPost, addPost] = useMutation(addPostQuery)
  const [result, refetch] = useQuery({
    query: stringQuery,
  })

  return { ...result, refetch, addPost, addedPost }
}
