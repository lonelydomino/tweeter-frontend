import React from 'react'
import '../styles/signupform.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, 
    Input, 
    Center, 
    VStack,
    Button
  } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { handleLogin } from '../actions/authActions'

export const LoginForm = () => {
    const dispatch = useDispatch()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = () => {
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        dispatch(handleLogin(data))
    }
  return (
    <div id='login-form'>
        <FormControl>
            <Center>
                <VStack>
                    <FormLabel>Email address</FormLabel>
                    <Input ref={emailRef} type='email' />
                    <FormLabel>Password</FormLabel>
                    <Input ref={passwordRef} type='password' />
                    <Button onClick={handleSubmit}>Submit</Button>
                </VStack>
            </Center>
        </FormControl>
    </div>
  )
}
