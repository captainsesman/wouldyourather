//Create Action Type
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const NEW_QUESTION = 'NEW_QUESTION'

//Exporting Action Creators
export function receiveUsers(users) {   

    return {
        type: RECEIVE_USERS,
        users,
    }
}