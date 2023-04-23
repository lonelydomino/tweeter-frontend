import React from 'react'
import { Link, VStack, Button } from '@chakra-ui/react'
import '../styles/navcolumn.css'
import { useSelector } from 'react-redux'
import { Link as ReactLink} from 'react-router-dom'
export const NavColumn = () => {
  const isAuth = useSelector(state => state.auth.isAuth)
  return (
        <VStack id='navcolumn' spacing={8}>
            <Link as={ReactLink} to='/'>Home</Link>
            {isAuth ? <Link as={ReactLink} to='/mytweets'>My Tweets</Link> : null }
            {/* <Link>Notifications</Link> */}
            {/* <Link>Messages</Link> */}
            {/* <Link>Bookmarks</Link> */}
            <Link>Profile</Link>
            {/* <Link>More</Link> */}
            <Button colorScheme='blue'>Tweet</Button>
        </VStack>
  )
}
