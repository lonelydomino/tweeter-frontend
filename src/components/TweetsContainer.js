import React from 'react'
import { Tweet } from './Tweet'
import { fetchTweets } from '../actions/tweetActions'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { VStack, StackDivider, Center } from '@chakra-ui/react'

const TweetsContainer = (props) => {
    
    useEffect(() => {
        props.fetchTweets()
    }, [])

    let tweets = props.tweets

    if(!tweets){
        return null
    } else{
        return (
            <Center>
                <VStack 
                    width='50%'
                    divider={<StackDivider borderColor='green.200' />}
                    spacing={4}
                    align='stretch'
                >
                    {tweets.map( tweet => {
                        return (<Tweet key={tweet._id} content={tweet.content} />)
                    })}
                </VStack>
            </Center>
        )
    }
}

const mapStateToProps = (state) => {
    return { tweets: state.tweets.tweets }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTweets: () => dispatch(fetchTweets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetsContainer)