import { RECEIVE_QUESTIONS, ANSWER_QUESTION, NEW_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
       
            return {
                ...state,
                ...action.questions,
            }
        case ANSWER_QUESTION:            
            return {            
                ...state,
                [action.id]: {
                    ...state[action.id],                  
                [action.answer]: {
                        ...state[action.id][action.answer],
                    votes: state[action.id][action.answer].votes.concat([action.authedUser]),
                       }
                }
            }
        case NEW_QUESTION:
            
            const { question } = action;
            const id = question.id;            
            return {
                ...state,
                [id]: question,
            }
            
        default:
            return state
    }
}