import { Box, Button, Card, CardHeader, Heading, CardBody, Text, Flex, IconButton, CardFooter } from '@chakra-ui/react'
import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTweet } from '../actions/tweetActions'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiLike, BiChat, BiShare } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import '../styles/tweet.css'

export const Tweet = ({ tweet }) => {
    let size = 'lg'
    const dispatch = useDispatch()
    const userId = useSelector(state => state.auth.userId)
    const isAuth = useSelector( state => state.auth.isAuth)
    const handleDelete = tweetId => {
        dispatch(deleteTweet(tweetId, userId))
    }

  return (
      <Card key={'size'}>
            <CardHeader>
            <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    <Box w='100%'>
                        <Heading size='md'> {tweet.authorName}</Heading>
                        {/* <Text>Descriptors or Titles</Text> */}
                    </Box>
                </Flex>
                <IconButton variant='ghost' colorScheme='gray' aria-label='See Menu' icon={<BsThreeDotsVertical />} />
            </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    { tweet.content }
                </Text>
                
            </CardBody>
            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                '& > button': {
                minW: '136px',
            },
             }}>
                <Button className='tweet-footer-buttons' flex='1' variant='ghost' leftIcon={<BiLike />}>
                    Like
                </Button>
                <Button className='tweet-footer-buttons' flex='1' variant='ghost' leftIcon={<BiChat />}>
                    Comment
                </Button>
                <Button className='tweet-footer-buttons' flex='1' variant='ghost' leftIcon={<BiShare />}>
                    Share
                </Button>
                {isAuth && userId === tweet.authorId ? <Button className='tweet-footer-buttons' flex='1' variant='ghost' leftIcon={<AiFillDelete />} onClick={() => handleDelete(tweet._id)}>Delete</Button> : null }
            </CardFooter>    
    
    </Card>

  )
}
