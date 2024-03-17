import { Text, View } from 'dripsy'
import { StatusBar } from 'expo-status-bar'
import { graphql } from 'gql.tada'
import { useEffect, useState } from 'react'
import { useMutation } from 'urql'

import StyledButton from '../src/components/StyledButton'
import StyledInput from '../src/components/StyledInput'
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

      <StyledInput
        value={email}
        onChangeText={setEmail}
        placeholder="email"
        textContentType="emailAddress"
      />
      <StyledInput
        value={password}
        onChangeText={setPassword}
        placeholder="pwd"
        textContentType="newPassword"
        secureTextEntry
      />

      <View
        sx={{
          flexDirection: 'row',
          columnGap: 12,
          alignItems: 'center',
        }}
      >
        <StyledLink>Go back</StyledLink>
        <StyledButton
          onPress={() => signUpUser({ email, password, role: 'NORMAL' })}
        >
          Let's 🤘
        </StyledButton>
      </View>
    </View>
  )
}
