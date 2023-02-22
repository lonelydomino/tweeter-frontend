import React, { useEffect } from 'react'
import { Tweet } from '../Tweet'
import { VStack, StackDivider, Center, Box } from '@chakra-ui/react'
import TweetForm from '../TweetForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTweets } from '../../actions/tweetActions'
import { fetchLikedTweets } from '../../actions/tweetActions'


const TweetsContainer = () => {
    const dispatch = useDispatch()
    const tweets = useSelector(state => state.tweets.tweets)
    const reversed = tweets.slice().reverse()
    const isAuth = useSelector( state => state.auth.isAuth)
    
    useEffect(() =>{
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')

        dispatch(fetchTweets())
        

        //fetch liked Tweets and then pass down to each tweet and check if liked

    }, [])


        return (
                <Box w='30%'>
                    <VStack align='stretch'>
                        <TweetForm />
                        <Center>
                            <VStack 
                                divider={<StackDivider borderColor='green.200' />}
                                spacing={4}
                                align='stretch' w="120%"
                            >
                                { reversed.map(tweet => {
                                    return <Tweet key={tweet._id } tweet={tweet} />
                                }) }
                            </VStack>
                        </Center> 

                    </VStack>
                </Box>
        )
    

}

export default TweetsContainer