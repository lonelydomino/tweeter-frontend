import React , { useRef } from 'react'
import { connect } from 'react-redux'
import { createTweet } from '../actions/tweetActions'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input, Button, Center, Divider
  } from '@chakra-ui/react'

const TweetForm = (props) => {
    const tweetContentRef = useRef()

    const handleAddTweet = (e) => {
        const content = tweetContentRef.current.value
        if(!content || content === '') return
        props.createTweet(content)
        tweetContentRef.current.value = null
    }
  return (
    <Center>
        <FormControl width='50%'>
            <FormLabel>Tweet</FormLabel>
            <Input ref={tweetContentRef} type='text' />
            <FormHelperText>What's happening?</FormHelperText>
            <Center my="15px">
                <Button m='1em' onClick={handleAddTweet} colorScheme='blue'>Tweet</Button>
            </Center>
            <Divider />
        </FormControl>
    </Center>
  )
}
const mapDispatchToProps = (dispatch) => {
    return {
        createTweet: (tweet) => dispatch(createTweet(tweet))
    }
}
export default connect(null, mapDispatchToProps)(TweetForm)
