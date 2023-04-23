import { Box, Button, Card, CardHeader, Heading, CardBody, Text, Flex, IconButton, CardFooter } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Avatar } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
// import { deleteTweet } from '../actions/tweetActions'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiLike } from 'react-icons/bi'
import '../styles/tweet.css'
import { updateLikes } from '../actions/tweetActions'
import { Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverBody, PopoverArrow, Center } from '@chakra-ui/react'

export const Tweet = ({ tweet }) => {
    useEffect(() => {

    }, [])
    const dispatch = useDispatch()

    const likedTweets = useSelector(state => state.tweets.likedTweets)
    // const userId = useSelector(state => state.auth.userId)
    const isAuth = useSelector( state => state.auth.isAuth)

    const toggleButtonText = {
        Like: (button) => {
            button.textContent = "Unlike"
            //add icon in line?
        },
        Unlike: (button) => {
            button.textContent = "Like"
            //add icon in line?
        }
    }
    const checkLikedTweets = (tweetId) => {
        if(likedTweets.includes(tweetId)) return 'Unlike'
        return 'Like'
    }

    // const handleDelete = tweetId => {
    //     dispatch(deleteTweet(tweetId, userId))
    // }

    const handleLikes = (e, tweetId) => {
        let action = e.currentTarget.textContent
        toggleButtonText[action](e.currentTarget)
        dispatch(updateLikes(tweetId, action))
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
                { isAuth ? 
                <Popover>
                    <PopoverTrigger>
                        <IconButton variant='ghost' colorScheme='gray' aria-label='See Menu' icon={<BsThreeDotsVertical />} />
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <Center>
                            <PopoverBody><Button colorScheme='red'>Delete</Button></PopoverBody>
                        </Center>
                    </PopoverContent>
                </Popover> : null }
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
                    {isAuth ? <Button className='tweet-footer-buttons' onClick={(e) => handleLikes(e, tweet._id)} flex='1' variant='ghost' leftIcon={<BiLike />}>{checkLikedTweets(tweet._id)}</Button> : null}       
                    {/* <Button className='tweet-footer-buttons' flex='1' variant='ghost' leftIcon={<BiChat />}>
                        Comment
                    </Button> */}
                {/* <Button className='tweet-footer-buttons' flex='1' variant='ghost' leftIcon={<BiShare />}>
                    Share
                </Button> */}
                {/* {isAuth && userId === tweet.authorId ? <Button className='tweet-footer-buttons' flex='1' variant='ghost' leftIcon={<AiFillDelete />} onClick={() => handleDelete(tweet._id)}>Delete</Button> : null } */}
            </CardFooter>    
    
    </Card>

  )
}
