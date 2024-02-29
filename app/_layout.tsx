import { DripsyProvider } from 'dripsy'
import * as NavigationBar from 'expo-navigation-bar'
import { Stack } from 'expo-router'

import theme from './helpers/theme'

NavigationBar.setPositionAsync('absolute')
NavigationBar.setBackgroundColorAsync('#00000000')

export default function MainLayout() {
  return (
    <DripsyProvider theme={theme}>
      <Stack
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
        }}
      />
    </DripsyProvider>
  )
}
