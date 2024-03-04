import { Text, View } from 'dripsy'
import { StatusBar } from 'expo-status-bar'

import StyledLink from './components/StyledLink'
import { Provider } from 'urql'
import urqlClient from './helpers/urqlClient'

export default function Home() {
  return (
    <View
      sx={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$primary',
      }}
    >
      <StatusBar style="light" />
      <Text sx={{ color: '$accent', fontWeight: '700', fontSize: 24 }}>
        Welcome to the starter app 💛
      </Text>
      <StyledLink href="/posts">Go to posts page</StyledLink>
    </View>
  )
}
