import { Client, cacheExchange, fetchExchange } from 'urql'

export default new Client({
  url: `${process.env.EXPO_PUBLIC_BACKEND_URL}/graphql`,
  exchanges: [cacheExchange, fetchExchange],
})
