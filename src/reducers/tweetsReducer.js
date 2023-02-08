
const tweetsReducer = (state = { tweets:[] }, action) => {
    switch(action.type){
        case 'POPULATE_TWEETS':
            return {
                ...state,
                tweets: action.tweets
            }
            default: return state
    }
}

export default tweetsReducer