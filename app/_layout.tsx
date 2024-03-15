import { DripsyProvider } from 'dripsy'
import * as NavigationBar from 'expo-navigation-bar'
import { Stack } from 'expo-router'
import { Provider as UrqlProvider } from 'urql'

import theme from '../src/helpers/theme'
import urqlClient from '../src/helpers/urqlClient'

NavigationBar.setPositionAsync('absolute')
NavigationBar.setBackgroundColorAsync('#00000000')

export default function MainLayout() {
  return (
    <UrqlProvider value={urqlClient}>
      <DripsyProvider theme={theme}>
        <Stack
          screenOptions={{
            animation: 'slide_from_right',
            headerShown: false,
          }}
        />
      </DripsyProvider>
    </UrqlProvider>
  )
}
