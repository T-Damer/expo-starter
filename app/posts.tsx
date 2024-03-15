import { FlashList, ListRenderItemInfo } from '@shopify/flash-list'
import { View, Text, useSx, TextInput } from 'dripsy'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, Dimensions } from 'react-native'

import StyledLink from '../src/components/StyledLink'
import usePosts from '../src/helpers/queries/usePosts'

const FeedPost = ({
  item: { title, id },
}: ListRenderItemInfo<{ title: string; id: string }>) => {
  return (
    <View sx={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Text sx={{ color: 'white' }}>
        {title}-{id}
      </Text>
    </View>
  )
}

export default function Posts() {
  const sx = useSx()
  const { data, fetching, error, refetch, addPost } = usePosts()
  const [postText, setPostText] = useState('')

  const containerStyle = sx({
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  })

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
        data={data?.posts}
        renderItem={FeedPost}
        estimatedItemSize={22}
        onRefresh={refetch}
        showsVerticalScrollIndicator={false}
        refreshing={false}
        ListEmptyComponent={<Text>Waiting for posts 🖨️</Text>}
      />
      <TextInput
        sx={{
          color: 'white',
          borderColor: 'white',
          borderStyle: 'solid',
          borderWidth: '2px',
        }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        onPress={() => {
          setPostText('done')
        }}
        title="Add post"
      />
    </View>
  )
}
