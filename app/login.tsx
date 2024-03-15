import { Text, TextInput, View, useSx } from 'dripsy'
import { StatusBar } from 'expo-status-bar'
import { graphql } from 'gql.tada'
import { useEffect, useState } from 'react'
import { Button } from 'react-native'
import { useMutation } from 'urql'

import StyledLink from '../src/components/StyledLink'

const signUpMutation = graphql(`
  mutation SignupMutation($email: String!, $password: String!, $role: Role!) {
    createOneUser(data: { email: $email, password: $password, role: $role }) {
      id
    }
  }
`)

export default function Login() {
  const [userToken, signUpUser] = useMutation(signUpMutation)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (!userToken.error && userToken.data) {
      // write to localStorage
      // userToken.data.createOneUser.id
    }
  }, [userToken])

  const inputStyle = useSx()({
    padding: 4,
    borderWidth: 1,
    color: 'white',
    borderColor: 'white',
    borderRadius: 4,
  })

  return (
    <View
      sx={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$primary',
        rowGap: 8,
      }}
    >
      <StatusBar style="light" />
      <Text sx={{ color: '$accent', fontWeight: '700', fontSize: 24 }}>
        Let's get started ⛳
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="email"
        textContentType="emailAddress"
        sx={inputStyle}
        placeholderTextColor="$primaryDimmed"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="pwd"
        textContentType="newPassword"
        sx={inputStyle}
        placeholderTextColor="$primaryDimmed"
        secureTextEntry
      />

      <View
        sx={{
          flexDirection: 'row',
          columnGap: 12,
          alignItems: 'center',
        }}
      >
        <StyledLink href="/posts">Go back to posts</StyledLink>
        <Button
          onPress={() => signUpUser({ email, password, role: 'NORMAL' })}
          title="Let's 🤘"
        />
      </View>
    </View>
  )
}
