import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { setAuthData } from '../../actions/authActions'
import TweetsContainer from './TweetsContainer'
import RightContainer from './RightContainer'
import { fetchLikedTweets } from '../../actions/tweetActions'
import NavContainer from './NavContainer'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

import Protected from '../Protected'

const MainContainer = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)

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
    })

  return (
        <Box w='100%'>
            <Flex>
                    <NavContainer />
                    <Routes>
                        <Route path='/' element={<TweetsContainer/>} />
                            <Route path='/mytweets' 
                             element={
                                 <Protected isLoggedIn={isAuth}>
                                    <TweetsContainer action={'mytweets'}/>
                                 </Protected>
                                }
                            />
                    <Route path='*' element={<TweetsContainer />} />
                    </Routes>
                    {/* <TweetsContainer /> */}
                    <RightContainer />
            </Flex>
        </Box>
  )
}

export default MainContainer