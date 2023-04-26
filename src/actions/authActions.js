import { fetchLikedTweets } from "./tweetActions"

export const handleSignup = (data) => {
    return (dispatch) => {
        debugger
        fetch('https://tweeter-backend.herokuapp.com//auth/signup', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: data.imageUrl,
                email: data.email,
                password: data.password,
                name: data.name,
                handle: '@' + data.handle
            })
        })
        .then(resp => {
            if(resp.status !== 200 && resp.status !== 201){
                console.log('Error!')
                throw new Error('Creating a user failed.')
            }
            return resp.json()
        })
        .then(json => {
            console.log(json)
            dispatch({type: 'SIGNUP', userId: json.userId, handle: json.handle, token: json.token, isAuth: true})
            localStorage.setItem('token', json.token)
            localStorage.setItem('handle', json.handle)
            localStorage.setItem('userId', json.userId)
            const remainingMilliseconds = 60 * 60 * 1000;
            const expiryDate = new Date(
                new Date().getTime() + remainingMilliseconds
            )
            localStorage.setItem('expiryDate', expiryDate.toISOString())
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const handleLogin = (data) => {
    return (dispatch) => {
        fetch('https://tweeter-backend.herokuapp.com//auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        .then(res => {
            if (res.status === 422) {
                throw new Error('Validation failed.')
            }
            if (res.status !== 200 && res.status !== 201){
                console.log('Error.')
                throw new Error('Could not authenticate.')
            }
            return res.json() 
        })
        .then( resData => {
            dispatch({type: 'LOGIN', userId: resData.userId, handle: resData.handle, name: resData.name, likedTweets: resData.likedTweets, token: resData.token, isAuth: true})
            dispatch(fetchLikedTweets({userId: resData.userId, token: resData.token}))

            localStorage.setItem('token', resData.token)
            localStorage.setItem('handle', resData.handle)
            localStorage.setItem('userId', resData.userId)
            
            const remainingMilliseconds = 60 * 60 * 1000;
            const expiryDate = new Date(
                new Date().getTime() + remainingMilliseconds
            )
            localStorage.setItem('expiryDate', expiryDate.toISOString())
            // this.setAutoLogout(remainingMilliseconds);
        })
        .catch(err => {
            console.log(err)
        })
    }
}
export const setAuthData = (data) => {
    return (dispatch) => {
        dispatch({type: 'SET_AUTHDATA', data})
    }

}

export const handleLogout = () => {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT'})
    }
}