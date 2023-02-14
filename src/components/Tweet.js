import { Box, Button, Card, CardHeader, Heading, CardBody, Text } from '@chakra-ui/react'
import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTweet } from '../actions/tweetActions'

export const Tweet = ({ tweet }) => {
    let size = 'lg'
    const dispatch = useDispatch()
    const userId = useSelector(state => state.auth.userId)
    const isAuth = useSelector( state => state.auth.isAuth)
    const handleDelete = tweetId => {
        dispatch(deleteTweet(tweetId, userId))
    }

  return (
    <Box w='100%'>
      <Card key={'size'} size={size} boxShadow='none'>
            <CardHeader>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                <Heading size='md'> {tweet.authorName}</Heading>
            </CardHeader>
            <CardBody>
        <Text>{ tweet.content }</Text>
        {isAuth && userId === tweet.authorId ? <Button colorScheme='red' onClick={() => handleDelete(tweet._id)}>Delete</Button> : null }
      </CardBody>
    </Card>

    </Box>
  )
}
