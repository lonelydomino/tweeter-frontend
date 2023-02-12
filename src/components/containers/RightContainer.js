import React from 'react'
import { Center, Box, Button } from '@chakra-ui/react'
import { handleLogout } from '../../actions/authActions'
import { LoginForm } from '../LoginForm'

const RightContainer = (props) => {
  return (
    <Box w='20%' borderLeft='1px' borderColor='gray.200'>
        <Center>
            { props.isAuth ? <Button colorScheme='blue' onClick={() => props.dispatch(handleLogout())}> Logout</Button> : <LoginForm /> }
        </Center>
    </Box>
  )
}

export default RightContainer