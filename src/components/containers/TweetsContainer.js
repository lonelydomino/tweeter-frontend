import React, { useEffect } from 'react'
import { Tweet } from '../Tweet'
import { VStack, Center, Box } from '@chakra-ui/react'
import TweetForm from '../TweetForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTweets } from '../../actions/tweetActions'


const TweetsContainer = (props) => {
    const dispatch = useDispatch()
    const curretUserId = useSelector(state => state.auth.userId)
    const tweets = useSelector(state => state.tweets.tweets)
    let tweetsToUse = []
    // debugger
    if(props.action === 'mytweets'){
        tweetsToUse = tweets.filter(t => t.authorId === curretUserId).slice().reverse()
    } else {
        tweetsToUse = tweets.slice().reverse()
    }

    // debugger
    useEffect(() =>{
        dispatch(fetchTweets())
        //fetch liked Tweets and then pass down to each tweet and check if liked

    })


        return (
                <Box w='30%'>
                    <VStack align='stretch'>
                        <TweetForm />
                        <Center>
                            <VStack 
                                spacing={4}
                                align='stretch' w="120%"
                            >
                                { tweetsToUse.map(tweet => {
                                    return <Tweet key={tweet._id } tweet={tweet} />
                                }) }
                            </VStack>
                        </Center> 

                    </VStack>
                </Box>
        )
    

}

export default TweetsContainer