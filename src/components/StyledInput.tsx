import { useSx } from 'dripsy'
import { TextInput, TextInputProps } from 'react-native'

export default function StyledInput(inputProps: TextInputProps) {
  const sx = useSx()

  const inputStyle = sx({
    padding: 4,
    borderWidth: 1,
    color: 'white',
    borderColor: 'white',
    borderRadius: 4,
  })

  return (
    <TextInput
      {...inputProps}
      style={[inputStyle, inputProps.style]}
      placeholderTextColor={inputProps.placeholderTextColor || '#ffcc3369'}
    />
  )
}
