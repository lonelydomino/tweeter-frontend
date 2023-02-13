import React , { useRef } from 'react'
import { connect, useSelector } from 'react-redux'
import { createTweet } from '../actions/tweetActions'
import {
    FormControl,
    FormLabel,
    FormHelperText, Input, Button, Center, Divider, Box,
  } from '@chakra-ui/react'

const TweetForm = (props) => {
    const tweetContentRef = useRef()
    const userId = useSelector( state => {
        return state.auth.userId
    })
    const token = useSelector(state => state.auth.userId)
    const name = useSelector(state => {
        return state.auth.name
    })

    const handleAddTweet = (e) => {
        const content = tweetContentRef.current.value
        let tweet = {
            content: content,
            userId: userId,
            name: name,
            token: token
        }
        if(!content || content === '') return
        props.createTweet(tweet)
        tweetContentRef.current.value = null
    }
  return (
        <Box w='100%'>
            <Center my='2rem'>
                <FormControl width='90%'>
                    <FormLabel>Tweet</FormLabel>
                    <Input ref={tweetContentRef} type='text' />
                    <FormHelperText>What's happening?</FormHelperText>
                    <Center my="15px">
                        <Button m='1em' onClick={handleAddTweet} colorScheme='blue'>Tweet</Button>
                    </Center>
                </FormControl>
            </Center>
            <Divider />
        </Box>
    
  )
}
const mapDispatchToProps = (dispatch) => {
    return {
        createTweet: (tweet) => dispatch(createTweet(tweet))
    }
}
export default connect(null, mapDispatchToProps)(TweetForm)
