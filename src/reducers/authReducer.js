
const authReducer = (state = { isAuth: false, userId: '', token: '', name: '', likedTweets: [] }, action) => {
    switch(action.type){
        case 'SIGNUP':
            return {
                ...state,
                handle: action.handle,
                token: action.token,
                isAuth: true,
                userId: action.userId
            }
        case 'LOGIN':
            return {
                ...state,
                isAuth: true,
                handle: action.handle,
                userId: action.userId,
                token: action.token,
                name: action.name,
                likedTweets: action.likedTweets
            }
        case 'SET_AUTHDATA':
            return {
                ...state, 
                isAuth: action.data.isAuth,
                token: action.data.token,
                userId: action.data.userId,
                handle: action.data.handle,
                likedTweets: action.likedTweets
            }
        case 'LOGOUT':
            localStorage.removeItem('token')
            localStorage.removeItem('expiryDate')
            localStorage.removeItem('userId')
            localStorage.removeItem('name')
            localStorage.removeItem('handle')
            localStorage.removeItem('likedTweets')

            return {
                ...state,
                isAuth: false,
                token: null,
                userId: null,
                name: null,
                handle: null,
                likedTweets: null
            }
        default: return state
    }
}

export default authReducer