import React from 'react'
import { Link, VStack, Box, Button } from '@chakra-ui/react'
import '../styles/navcolumn.css'

export const NavColumn = () => {
  return (
        <VStack id='navcolumn' spacing={8}>
            <Link href='/'>Home</Link>
            <Link>Explore</Link>
            <Link>Notifications</Link>
            <Link>Messages</Link>
            <Link>Bookmarks</Link>
            <Link>Profile</Link>
            <Link>More</Link>
            <Button colorScheme='blue'>Tweet</Button>
        </VStack>
  )
}
