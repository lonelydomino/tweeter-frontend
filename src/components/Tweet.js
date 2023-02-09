import { Box, Card, CardHeader, Heading, CardBody, Text } from '@chakra-ui/react'
import React from 'react'

export const Tweet = ({ content }) => {
    let size = 'lg'
  return (
        <Card key={'size'} size={size} boxShadow='none'>
            <CardHeader>
                <Heading size='md'> {content}</Heading>
            </CardHeader>
            <CardBody>
        <Text>{ content }</Text>
      </CardBody>
    </Card>
  )
}
