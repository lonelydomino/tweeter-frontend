import React, { useState } from 'react'
import '../styles/loginform.css'
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
import { SignupForm } from './SignupForm'

export const LoginForm = () => {
    const dispatch = useDispatch()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [signUp, setSignup] = useState(false)
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
                    <Button colorScheme='blue' onClick={handleSubmit}>Submit</Button>
                </VStack>
            </Center>
        </FormControl>
        <Center my={5}><Button onClick={() => setSignup(true)}colorScheme='blue'>New? Sign up</Button></Center>
        {signUp ? <SignupForm /> : null}
    </div>
  )
}
