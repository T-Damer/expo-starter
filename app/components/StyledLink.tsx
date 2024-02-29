import { Href, Link } from 'expo-router'
import { PropsWithChildren } from 'react'
import { ColorValue } from 'react-native'

type StyledLinkProps = PropsWithChildren & {
  color?: ColorValue
  href?: Href<string>
}

export default function StyledLink({
  children,
  color = '#fff',
  href = '/',
}: StyledLinkProps) {
  return (
    <Link
      href={href}
      style={{
        color,
        textDecorationStyle: 'dotted',
        textDecorationLine: 'underline',
        fontWeight: '700',
      }}
    >
      {children}
    </Link>
  )
}
