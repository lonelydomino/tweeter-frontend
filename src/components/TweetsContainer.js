import React from 'react'
import { Tweet } from './Tweet'
import { fetchTweets } from '../actions/tweetActions'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { VStack, StackDivider, Center, Flex, Box, Text } from '@chakra-ui/react'
import { NavColumn } from './NavColumn'

const TweetsContainer = (props) => {
    
    useEffect(() => {
        props.fetchTweets()
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
                <Box w='20%' borderLeft='1px' borderColor='gray.200'>

                </Box>


            </Flex>
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