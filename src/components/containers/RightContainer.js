import React from 'react'
import { Center, Box, Button, VStack } from '@chakra-ui/react'
import { handleLogout } from '../../actions/authActions'
import { LoginForm } from '../LoginForm'
import '../../styles/rightcontainer.css'
import { useDispatch, useSelector } from 'react-redux'
import { SignupForm } from '../SignupForm'
import { useState } from 'react'

const RightContainer = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    const [signUp, setSignup] = useState(false)

  return (
    <Box id='right-container' w='35%' borderLeft='1px' borderColor='gray.200'>
        <Center>
          <VStack>
            { isAuth ?
             <Button colorScheme='blue' onClick={() => dispatch(handleLogout())}> Logout</Button> 
             : null}
             { !isAuth && signUp === true ?
              (<><SignupForm /><Center my={5}><Button onClick={() => setSignup(false)}colorScheme='blue'>Already have an account?</Button></Center></>) : 
              (<>
                {!isAuth ? <>
                <LoginForm />
                <Center my={5}><Button onClick={() => setSignup(true)}colorScheme='blue'>New? Sign up</Button></Center>
                </> : null}
                
              </>)}
          </VStack>
        </Center>
    </Box>
  )
}

export default RightContainer