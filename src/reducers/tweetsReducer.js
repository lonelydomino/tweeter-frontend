
const tweetsReducer = (state = { tweets:[] }, action) => {
    switch(action.type){
        case 'POPULATE_TWEETS':
            return {
                ...state,
                tweets: action.tweets
            }
        case 'ADD_TWEET':
            return {
                ...state,
                tweets: [...state.tweets, action.tweet.tweet]
            }
        case 'DELETE_TWEET':
            const updatedTweets = state.tweets.filter(t => t._id !== action.tweetId)
            return {
                ...state,
                tweets: updatedTweets
            }

            default: return state
    }
}

export default tweetsReducer