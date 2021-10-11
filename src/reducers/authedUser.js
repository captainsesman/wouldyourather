//import Action Type
import { AUTHED_USER, LOG_OUT } from "../actions/authedUsers"

//Reducer for users
export default function authedUser(state = null, action) {
    switch (action.type) {
        //Imported Action type Used
        case AUTHED_USER:
            return action.id
        case LOG_OUT:
            return null
        default:
            return state
    }
}