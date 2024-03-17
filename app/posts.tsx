import { FlashList, ListRenderItemInfo } from '@shopify/flash-list'
import { View, Text, useSx } from 'dripsy'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Dimensions } from 'react-native'

import StyledButton from '../src/components/StyledButton'
import StyledInput from '../src/components/StyledInput'
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
    rowGap: 16,
  })

  return (
    <View sx={containerStyle}>
      <StatusBar style="dark" />
      <StyledLink>Go back</StyledLink>
      <Text sx={{ color: '$primary', fontWeight: '700', fontSize: 24 }}>
        Posts 📜
      </Text>
      {fetching && <p>Loading...</p>}
      {error && <p>Oh no, an error: {error.message}</p>}
      {!fetching && !error && (
        <>
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
          <StyledInput value={postText} onChangeText={setPostText} />
          <StyledButton
            onPress={() => {
              if (!postText) return
              addPost({
                title: postText,
                author: { connect: { email: 'dp@gmail.com' } },
              })
              setPostText('done')
              setTimeout(() => setPostText(''), 400)
            }}
            disabled={!postText}
          >
            Add post
          </StyledButton>
        </>
      )}
    </View>
  )
}
