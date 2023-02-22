import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { setAuthData } from '../../actions/authActions'
import TweetsContainer from './TweetsContainer'
import RightContainer from './RightContainer'
import { fetchLikedTweets } from '../../actions/tweetActions'
import NavContainer from './NavContainer'
import { useDispatch } from 'react-redux'
import { Box } from '@chakra-ui/react'

const MainContainer = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const expiryDate = localStorage.getItem('expiryDate')
        const handle = localStorage.getItem('handle')
        const userId = localStorage.getItem('userId')
        
        if(!token || !expiryDate){
            return
        }
        if(new Date(expiryDate) <= new Date()){
            //LOG OUT 
            return
        }
        // const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime()
        dispatch(setAuthData({isAuth: true, token: token, handle: handle, userId: userId }))
        if(token){
            dispatch(fetchLikedTweets({userId: userId, token: token}))
        }
        //set autologout
    }, [])

  return (
        <Box w='100%'>
    <Flex>
            <NavContainer />
            <TweetsContainer />
            <RightContainer />
    </Flex>
        </Box>
  )
}

export default MainContainer