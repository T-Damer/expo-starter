import { makeTheme } from 'dripsy'

export default makeTheme({
  colors: {
    $primary: '#8403fc',
    $primaryDimmed: '#6102ba',
    $accent: '#ffcc33',
  },
  space: {
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
  },
  fontSizes: {
    $0: 12,
    $1: 14,
    $2: 16,
    $3: 18,
    $4: 24,
    $5: 28,
    $6: 32,
  },
  text: {
    h1: {
      fontSize: '$2', // 16px, from `fontSizes` above
    },
    p: {
      fontSize: '$0', // 12px from `fontSizes`
      mb: '$3', // 16px from `space`
    },
  },
})
