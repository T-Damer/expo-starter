import { useSx, Text } from 'dripsy'
import { Href, Link, useNavigation } from 'expo-router'
import { PropsWithChildren } from 'react'
import { ColorValue } from 'react-native'

type StyledLinkProps = PropsWithChildren & {
  color?: ColorValue
  href?: Href<string>
}

export default function StyledLink({
  children,
  color = '#fff',
  href,
}: StyledLinkProps) {
  const { goBack } = useNavigation()
  const sx = useSx()

  const linkStyles = sx({
    color,
    textDecorationStyle: 'dotted',
    textDecorationLine: 'underline',
    fontWeight: '700',
  })

  return href ? (
    <Link href={href} style={linkStyles}>
      {children}
    </Link>
  ) : (
    <Text sx={linkStyles} onPress={goBack}>
      {children}
    </Text>
  )
}
