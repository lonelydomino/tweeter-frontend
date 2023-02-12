import React from 'react'
import { Tweet } from '../Tweet'
import { fetchTweets } from '../../actions/tweetActions'
import { connect, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { VStack, StackDivider, Center, Flex, Box, Text, Button } from '@chakra-ui/react'
import { NavColumn } from '../NavColumn'
import { LoginForm } from '../LoginForm'
import { setAuthData } from '../../actions/authActions'
import { handleLogout } from '../../actions/authActions'
import RightContainer from './RightContainer'

const TweetsContainer = (props) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        props.fetchTweets()

        const token = localStorage.getItem('token')
        const expiryDate = localStorage.getItem('expiryDate')
        if(!token || !expiryDate){
            return
        }
        if(new Date(expiryDate) <= new Date()){
            //LOG OUT 
            return
        }
        const userId = localStorage.getItem('userId')
        const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime()
        dispatch(setAuthData({isAuth: true, token: token, userId: userId}))
        //set autologout

    }, [])

    let tweets = props.tweets

    if(!tweets){
        return null
    } else{
        return (
            <Flex>
                <Box w='20%' borderRight='1px' borderColor='gray.200'>
                    <Center>
                        <NavColumn />
                    </Center>
                </Box>
                <Box w='60%'>
                    <Center>
                        <VStack 
                            divider={<StackDivider borderColor='green.200' />}
                            spacing={4}
                            align='stretch' w="100%"
                        >
                            {tweets.map( tweet => {
                                return (<Tweet key={tweet._id} content={tweet.content} />)
                            })}
                        </VStack>
                    </Center>
                </Box>
                <RightContainer dispatch={dispatch} isAuth={props.isAuth}/>
            </Flex>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
            tweets: state.tweets.tweets,
            isAuth: state.auth.isAuth
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTweets: () => dispatch(fetchTweets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetsContainer)