export const fetchTweets = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/feed/tweets')
        .then(resp => resp.json())
        .then(json =>{
            dispatch({type: 'POPULATE_TWEETS', tweets: json.tweets})
        })
    }
}

export const fetchLikedTweets = (data) => {
    return (dispatch) => {
        fetch('http://localhost:8080/feed/tweets/' + data.userId + '/liked', {
            headers: {
                Authorization: 'Bearer ' + data.token
            }
        })
        .then(resp => resp.json())
        .then(json => {
            dispatch({type: 'POPULATE_TWEET_LIKES', payload: json })
        })
        .catch(error => console.log(error))
    }
}

export const fetchUserTweets = () => {
    return (dispatch) => {
        
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

export const updateLikes = (tweetId, action) => {
        return (dispatch) => {
            fetch('http://localhost:8080/feed/tweets/' + tweetId + '/act', {
                method: 'PATCH',
                headers: {
                    Authorization : 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    action: action,
                    tweetId: tweetId
                })
            })
            .then(resp => {
                action === 'Like' ? dispatch({type: 'ADD_TO_LIKED_TWEETS', payload: tweetId}):dispatch({type: 'REMOVE_FROM_LIKED_TWEETS', payload: tweetId})
            })
            .catch(error => console.log(error))
            // dispatch(update number of likes in state)
        }
}