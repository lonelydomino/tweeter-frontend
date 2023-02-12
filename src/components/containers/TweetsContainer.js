import React, { useEffect } from 'react'
import { Tweet } from '../Tweet'
import { VStack, StackDivider, Center, Box } from '@chakra-ui/react'
import TweetForm from '../TweetForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTweets } from '../../actions/tweetActions'

const TweetsContainer = () => {
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchTweets())
    }, [])

    const tweets = useSelector(state => state.tweets.tweets)
        return (
                <Box w='60%'>
                    <VStack>
                        <TweetForm />
                        <Center>
                            <VStack 
                                divider={<StackDivider borderColor='green.200' />}
                                spacing={4}
                                align='stretch' w="100%"
                            >
                                
                                { tweets.map(tweet => {
                                    <Tweet content={ tweet.content }/>
                                    }) }
                            </VStack>
                        </Center>

                    </VStack>
                </Box>
        )
    

}

export default TweetsContainer