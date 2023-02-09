import React , { useRef } from 'react'
import { connect } from 'react-redux'
import { createTweet } from '../actions/tweetActions'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input, Button, Center, Divider, Box, Flex
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
    <Flex>
        <Box w='20%' borderRight='1px' borderColor='gray.200'>

        </Box>
        <Box w='60%'>
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
        <Box w='20%' borderLeft='1px' borderColor='gray.200'>
        </Box>
    </Flex>
    
  )
}
const mapDispatchToProps = (dispatch) => {
    return {
        createTweet: (tweet) => dispatch(createTweet(tweet))
    }
}
export default connect(null, mapDispatchToProps)(TweetForm)
