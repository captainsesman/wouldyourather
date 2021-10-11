import React, { Component } from 'react'
import { connect } from 'react-redux'
import Result from './Result';
import AnswerQuestion from './AnswerQuestion'

class SortQuestions extends Component {
    render() {
     
        const { id, answered, question } = this.props
               
        if (question === null) {
            return (
                <div> Question Does Not Exist</div>
            )
            
        }
        return (
     
                answered === -1 ? 
                    <div className='Question'>
                         <AnswerQuestion id={id} />    
                                                     
                    </div> :
                    <div className='Question'>
                            <Result id={id} />
                           
                    </div> 
        
           
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, props) {

    const { id } = props.match.params
    const question = questions[id] ? questions[id] : null
    const authorAnswered =(authedUser !== '') ? users[authedUser].answers : []
    const answered = Object.keys(authorAnswered).indexOf(id)  

    return {
        question,
        answered,
        id,

    }
}


export default connect(mapStateToProps)(SortQuestions)