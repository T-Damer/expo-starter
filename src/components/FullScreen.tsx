import { View } from 'dripsy'
import React, { PropsWithChildren } from 'react'

export default function FullScreen({ children }: PropsWithChildren) {
  return <View sx={{ flex: 1 }}>{children}</View>
}
