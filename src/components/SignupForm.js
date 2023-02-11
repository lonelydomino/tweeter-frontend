import React, { useRef } from 'react'
import '../styles/signupform.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input, Center, VStack, Button
  } from '@chakra-ui/react'
  import { useDispatch } from 'react-redux'
import { handleSignup } from '../actions/authActions'

export const SignupForm = () => {
    const dispatch = useDispatch()
    const nameRef = useRef()
    const passwordRef = useRef()
    const emailRef = useRef()
    
    const handleSubmit = () => {
        const data = {
            name: nameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value
        }
        dispatch(handleSignup(data))
    }

    

  return (
    <div id='signup-form'>
        <FormControl>
            <Center>
                <VStack>
                    <FormLabel>Email address</FormLabel>
                    <Input ref={emailRef} type='email' />
                    <FormLabel>Name</FormLabel>
                    <Input ref={nameRef}type='text' />
                    <FormLabel >Password</FormLabel>
                    <Input ref={passwordRef} type='password' />
                    <Button colorScheme='blue' onClick={handleSubmit} type='submit' >Submit</Button>
                </VStack>
            </Center>
        </FormControl>
    </div>
  )
}
