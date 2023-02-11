import { combineReducers } from 'redux'
import authReducer from './authReducer'
import tweetsReducer from './tweetsReducer'

const rootReducer = combineReducers({
    tweets: tweetsReducer,
    auth: authReducer
})
export default rootReducer
