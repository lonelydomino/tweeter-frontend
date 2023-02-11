
const authReducer = (state = { loggedIn: false }, action) => {
    switch(action.type){
        case 'SIGNUP':
            return {
                ...state,
                loggedIn: true,
                userId: action.userId
            }
        case 'LOGIN':
            return {
                ...state,
                loggedIn: true,
                userId: action.userId
            }
        default: return state
    }
}

export default authReducer