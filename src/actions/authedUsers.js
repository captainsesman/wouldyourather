//create action type
export const AUTHED_USER = 'AUTHED_USER';
export const  LOG_OUT = 'LOG_OUT'


//Action creator function
export function setAuthedUser(id) {
    
    return {
        type: AUTHED_USER,
        id,
    }
}

//Action creator function
export function logOutUser() {
        return {
            type: LOG_OUT,
        }
    }

export function handleSetAuthUser(user){
    return(dispatch) => {
        dispatch(setAuthedUser(user))
    }
}

export function handleLogOut(){
    return(dispatch) => {
        dispatch(logOutUser())
    }
}

 