import { useSx, Text } from 'dripsy'
import { Pressable, PressableProps } from 'react-native'

export default function StyledButton(buttonProps: PressableProps) {
  const sx = useSx()
  const { children, disabled } = buttonProps

  const textStyles = sx({
    color: disabled ? '$primaryDimmed' : '$primary',
    fontFamily: 'system-ui',
    fontWeight: '700',
  })
  const buttonStyles = sx({
    padding: 16,
    borderRadius: 16,
    backgroundColor: disabled ? '#ffffff60' : '#ffffff',
    ...textStyles,
  })

  const wrapperChildren =
    typeof children === 'string' ? (
      <Text style={textStyles}>{children}</Text>
    ) : (
      children
    )

  return (
    <Pressable {...buttonProps} style={[buttonStyles, buttonProps.style]}>
      {wrapperChildren}
    </Pressable>
  )
}
