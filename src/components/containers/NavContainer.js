import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import { NavColumn } from '../NavColumn'
import '../../styles/navcontainer.css'

const NavContainer = () => {
  return (
        <Box id='nav-container' w='20%' borderRight='1px' borderColor='gray.200'>
            <Center>
                <NavColumn />
            </Center>
        </Box>
  )
}

export default NavContainer