import { View, Text } from 'dripsy'
import { StatusBar } from 'expo-status-bar'
import StyledLink from './components/StyledLink'
import { Provider, gql, useQuery } from 'urql'
import usePosts from './helpers/queries/uesPosts'
import urqlClient from './helpers/urqlClient'
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list'
import { Dimensions } from 'react-native'

const containerStyle = {
  flex: 1,
  backgroundColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
}

const FeedPost = ({
  item: { title, id },
}: ListRenderItemInfo<{ title: string; id: string }>) => {
  return (
    <View sx={{ flexDirection: 'row', justifyContent: 'center' }}>
      {title}-{id}
    </View>
  )
}

function Posts() {
  const { data, fetching, error } = usePosts()

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no, an error: {error.message}</p>

  return (
    <View sx={containerStyle}>
      <StatusBar style="dark" />
      <StyledLink href="/">Go back</StyledLink>
      <Text sx={{ color: '$primary', fontWeight: '700', fontSize: 24 }}>
        Posts 📜
      </Text>
      <FlashList
        estimatedListSize={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
        style={{ alignItems: 'center', justifyContent: 'center' }}
        data={data?.posts}
        renderItem={FeedPost}
      />
    </View>
  )
}

export default function () {
  return (
    <Provider value={urqlClient}>
      <Posts />
    </Provider>
  )
}
