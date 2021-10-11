import React, { Component,Fragment } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Button } from 'react-bootstrap'
import LoadingBar from 'react-redux-loading'

class Dashboard extends Component {
  state = {
        answeredQuestion: true,
    }
    handleAnsweredClick = (e) => {
        e.preventDefault();
        this.setState(() => ({
            answeredQuestion: true,       
        }))
    }

      handleUnansweredClick = (e) => {
        e.preventDefault();
        this.setState(() => ({          
             answeredQuestion: false,
        }))
    }
    
    
    
    render() {
        const { questionsAnswered, questionsUnanswered } = this.props
        const {answeredQuestion} = this.state
       
        return (
            <div>
                <div  className='question_body'>
                    <div className='menu_grid'>
                           <Button variant="primary" style={{ width:'18rem', Textalign:'center', backgroundColor:answeredQuestion ? 'green' :'' }} onClick={this.handleAnsweredClick} >Unanswered Questions</Button>
                    </div>
                    <div  className='menu_grid'>
                         <Button variant="primary" style={{ width:'18rem', Textalign:'center', backgroundColor:!answeredQuestion ? 'green' :'' }} onClick={this.handleUnansweredClick} >Answered Questions</Button>
                    </div>
                </div>
                <Fragment>                     
                    {answeredQuestion ?
                    <ul className='dashboard-list'>
                        {questionsAnswered.map((id) => (
                            <li key={id}>                           
                                <Question id= {id}/>
                            
                            </li>
                        ))}
                    </ul>:

                    <ul className='dashboard-list'>
                        {questionsUnanswered.map((id) => (
                            <li key={id}>                           
                                <Question id= {id}/>
                            
                            </li>
                        ))}
                        </ul>
                    }
              </Fragment>
            </div>
        )
    }
}
function mapStateToProps({ questions, authedUser, users }) {
    const questionIds = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    const authedUserAnswered = Object.keys(users[authedUser].answers)

    const questionsAnswered = []
    const questionsUnanswered = []
    questionIds.map((id) => {
        if (authedUserAnswered.includes(id)) {
            questionsUnanswered.push(id);  
        }
        else {
             questionsAnswered.push(id);     
        }
    })    
    return {        
         questionsAnswered,
        questionsUnanswered,
    }
}

export default connect(mapStateToProps)(Dashboard)