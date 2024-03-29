import React, { useRef } from 'react'
import '../styles/signupform.css'
import {
    FormControl,
    FormLabel,
    Text, Input, Center, VStack, Button
  } from '@chakra-ui/react'
  import { useDispatch } from 'react-redux'
import { handleSignup } from '../actions/authActions'
import AvatarUpload from './AvatarUpload'
import { useState } from 'react'

export const SignupForm = () => {
    const dispatch = useDispatch()
    const nameRef = useRef()
    const passwordRef = useRef()
    const emailRef = useRef()
    const handleRef = useRef()
    const [image, setImage] = useState(null)

    const imageSet = (image) => {
        setImage(image)
    }

    const handleSubmit = () => {
        const data = {
            imageUrl: URL.createObjectURL(image),
            name: nameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            handle: handleRef.current.value
        }
        debugger
        dispatch(handleSignup(data))
    }

    

  return (
    <div id='signup-form'>
        <FormControl>
            <Center>
                <VStack>
                    <Text>New to Tweeter?</Text>
                    <AvatarUpload setImage={imageSet}/>
                    <FormLabel>Email address</FormLabel>
                    <Input ref={emailRef} type='email' />
                    <FormLabel>Handle</FormLabel>
                    <Input ref={handleRef} type='text' />
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
