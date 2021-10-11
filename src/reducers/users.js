//Import User Action from the Actions folder
import { RECEIVE_USERS,ANSWER_QUESTION, NEW_QUESTION } from "../actions/users";


//User Reducers
export default function users(state = {}, action){
    
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
    case ANSWER_QUESTION:
            const { id, answer, authedUser } = action;
         return {

        ...state,
        [authedUser]:
        {
            ...state[authedUser],
            answers:
            {
                ...state[authedUser].answers,
                [id]: answer,
            }
        }
            }
        
    case NEW_QUESTION:
          const { question } = action
            return{
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([question.id])
                }

            }
        default:
            return state
    }
}