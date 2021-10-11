//Exporting Action Type
import { saveQuestion, saveQuestionAnswer } from "../api";
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const NEW_QUESTION ='NEW_QUESTION'

export function  receiveQuestions(questions){

    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function answerQuestion({ id, authedUser, answer }) {

    return {
        type: ANSWER_QUESTION,
        id,
        authedUser,
        answer
    }
}

function newQuestion(question) {
    return {
        type: NEW_QUESTION,      
        question
    }
}


export function handleAnswerQuestion(info) {
   
    return (dispatch) => {      
        dispatch(showLoading());
        dispatch(answerQuestion({id:info.id, authedUser:info.authedUser, answer:info.answerSelected}))
        return saveQuestionAnswer({ qid: info.id, authedUser: info.authedUser, answer: info.answerSelected })            
        .catch((e) => {
        console.warn('Error in handleAnswerQuestion: ', e)
        dispatch(answerQuestion({id:info.id, authedUser:info.authedUser, answer:info.answerSelected}))
                 alert('The was an error Submiting Your Answer. Try again.')
        })       
    }
}

export function handleNewQuestion(question) {  
   
    return (dispatch) => {      
        dispatch(showLoading());      
        return saveQuestion({optionOneText:question.optionOne, optionTwoText:question.optionTwo, author:question.author})            
        .then((question) => dispatch(newQuestion(question)))
      .then(() => dispatch(hideLoading()))
    }
}





