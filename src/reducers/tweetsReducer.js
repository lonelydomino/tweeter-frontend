
const tweetsReducer = (state = { tweets:[], likedTweets: [] }, action) => {
    let updatedTweets
    switch(action.type){
        case 'POPULATE_TWEETS':
            return {
                ...state,
                tweets: action.tweets
            }
        case 'POPULATE_TWEET_LIKES':
            return {
                ...state,
                likedTweets: action.payload.likedTweets
            }
        case 'ADD_TWEET':
            return {
                ...state,
                tweets: [...state.tweets, action.tweet.tweet]
            }
        case 'DELETE_TWEET':
            updatedTweets = state.tweets.filter(t => t._id !== action.payload)
            return {
                ...state,
                tweets: updatedTweets
            }
        case "ADD_TO_LIKED_TWEETS":
            return {
                ...state,
                likedTweets: [...state.likedTweets, action.payload]

            }
        case 'REMOVE_FROM_LIKED_TWEETS':
            updatedTweets = state.likedTweets.filter(t => t !== action.payload)
            return {
                ...state,
                likedTweets: updatedTweets
            }
            

            default: return state
    }
}

export default tweetsReducer