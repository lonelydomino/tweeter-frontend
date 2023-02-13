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
                authorName: data.name,
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