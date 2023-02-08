export const fetchTweets = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/feed/tweets')
        .then(resp => resp.json())
        .then(json =>{
            dispatch({type: 'POPULATE_TWEETS', tweets: json})
        })
    }
}