import { Box, Card, CardHeader, Heading, CardBody, Text } from '@chakra-ui/react'
import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

export const Tweet = ({ content, authorName }) => {
    let size = 'lg'
  return (
    <Box w='100%'>
      <Card key={'size'} size={size} boxShadow='none'>
            <CardHeader>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                <Heading size='md'> {authorName}</Heading>
            </CardHeader>
            <CardBody>
        <Text>{ content }</Text>
      </CardBody>
    </Card>

    </Box>
  )
}
