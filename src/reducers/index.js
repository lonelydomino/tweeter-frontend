import { combineReducers } from 'redux'
import tweetsReducer from './tweetsReducer'

const rootReducer = combineReducers({
    tweets: tweetsReducer,
})
export default rootReducer
