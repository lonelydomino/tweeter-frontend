import React from 'react'
import { Tweet } from './Tweet'
import { fetchTweets } from '../actions/tweetActions'
import { connect } from 'react-redux'
import { useEffect } from 'react'

const TweetsContainer = (props) => {
    useEffect(() => {
        props.fetchTweets()
    }, [])
    let tweets = props.tweets.tweets
    console.log(tweets)
    if(!tweets){
        return null
    } else{
        return (
          tweets.map( tweet => {
              return (<Tweet content={tweet.content} />)
          })
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