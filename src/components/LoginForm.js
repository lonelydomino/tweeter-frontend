import React from 'react'
import '../styles/signupform.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input, Center, VStack
  } from '@chakra-ui/react'

export const LoginForm = () => {
  return (
    <div id='login-form'>
        <FormControl>
            <Center>
                <VStack>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    <FormLabel>Password</FormLabel>
                    <Input type='password' />
                </VStack>
            </Center>
        </FormControl>
    </div>
  )
}
