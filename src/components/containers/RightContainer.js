import React from 'react'
import { Center, Box, Button } from '@chakra-ui/react'
import { handleLogout } from '../../actions/authActions'
import { LoginForm } from '../LoginForm'
import '../../styles/rightcontainer.css'
import { useDispatch, useSelector } from 'react-redux'

const RightContainer = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
  return (
    <Box id='right-container' w='20%' borderLeft='1px' borderColor='gray.200'>
        <Center>
            { isAuth ? <Button colorScheme='blue' onClick={() => dispatch(handleLogout())}> Logout</Button> : <LoginForm /> }
        </Center>
    </Box>
  )
}

export default RightContainer