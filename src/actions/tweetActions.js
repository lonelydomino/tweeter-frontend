import { useSelector } from "react-redux"

export const fetchTweets = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/feed/tweets')
        .then(resp => resp.json())
        .then(json =>{
            dispatch({type: 'POPULATE_TWEETS', tweets: json.tweets})
        })
    }
}

export const createTweet = (data) => {
    return dispatch => {
        fetch('http://localhost:8080/feed/tweet', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                Authorization: 'Bearer ' + data.token},
            body: JSON.stringify({
                content: data.content,
                authorName: data.authorName,
                authorId: data.userId,
                token: data.token
            })
        })
        .then(resp => {
            console.log(resp)
            if(resp.status !== 200 && resp.status !== 201){
                throw new Error('Creating a post failed.')
            }
            return resp.json()
        })
        .then(json => {
            dispatch({type: 'ADD_TWEET', tweet: json})
        })
    }
}

export const deleteTweet = (tweetId, userId) => {
    return (dispatch) => {
        fetch('http://localhost:8080/feed/tweet/' + tweetId, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(resp => {
            if(resp.status !== 200 && resp.status !== 201){
                throw new Error('Deleting a tweet failed.')
            }
            return resp.json()
        })
        .then(resData => {
            dispatch({type: 'DELETE_TWEET', tweetId: tweetId})
        })
        .catch(err => {
            console.log(err)
        })
    }
}