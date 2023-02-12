
const authReducer = (state = { isAuth: false, userId: '', token: '' }, action) => {
    
    switch(action.type){
        case 'SIGNUP':
            return {
                ...state,
                isAuth: true,
                userId: action.userId
            }
        case 'LOGIN':
            return {
                ...state,
                isAuth: true,
                userId: action.userId,
                token: action.token
            }
        case 'SET_AUTHDATA':
            return {
                ...state, 
                isAuth: action.data.isAuth,
                token: action.data.token,
                userId: action.data.userId
            }
        case 'LOGOUT':
            localStorage.removeItem('token')
            localStorage.removeItem('expiryDate')
            localStorage.removeItem('userId')

            return {
                ...state,
                isAuth: false,
                token: null,
                userId: null
            }
        default: return state
    }
}

export default authReducer