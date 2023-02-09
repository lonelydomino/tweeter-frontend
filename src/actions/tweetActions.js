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
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                content: data
            })
        })
        .then(resp => {
            return resp.json()
        })
        .then(json => {
            dispatch({type: 'ADD_TWEET', tweet: json})
        })
    }
}