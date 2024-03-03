import { View, Text } from 'dripsy'
import { StatusBar } from 'expo-status-bar'

import StyledLink from './components/StyledLink'

const containerStyle = {
  flex: 1,
  backgroundColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
}

export default function About() {
  return (
    <View sx={containerStyle}>
      <StatusBar style="dark" />
      <Text sx={{ color: '$primary', fontWeight: '700', fontSize: 24 }}>
        💜
      </Text>
      <StyledLink>Go back</StyledLink>
    </View>
  )
}
