
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
            default: return state
    }
}

export default tweetsReducer