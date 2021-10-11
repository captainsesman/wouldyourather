import React, { Component } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { connect } from 'react-redux'
import {handleAnswerQuestion} from '../actions/questions'

class AnswerQuestion extends Component {
     state = {
        answerSelected: '',
    }


     onSelect = (e) => {
        let answerSelected = e.target.id
        this.setState(() => ({
            answerSelected,
        }))
    }

   
      handleSubmit = (e) => {
          e.preventDefault();
          const {answerSelected } = this.state         
          const { id, dispatch, authedUser } = this.props              
         dispatch(handleAnswerQuestion({id, answerSelected, authedUser})) }
    
    render() {
        const { author, question } = this.props   
        const optionOne = question.optionOne.text
        const optionTwo = question.optionTwo.text  
        const { name, avatarURL } = author
        
        return (
            <div>
                <Card style={{ width: '50rem' }}>
                <Card.Header as="h5">{name} Asks:</Card.Header>
                    <Card.Body className='question_body'>
                        <div className ='question_left'>
                            <img src={avatarURL} alt="Pic" className='avatar'/>
                        </div>

                        <div className='question_right '>
                            <Card.Title >  Would You Rather ...........</Card.Title>
                            <Form >                           
                                <div  className="mb-3">
                                    <Form.Check 
                                        type='radio'
                                        id='optionOne'
                                        value={optionOne}
                                        label={optionOne}
                                        onChange={this.onSelect}
                                        checked={this.state.answerSelected === 'optionOne'}
                                    />
                                    <Form.Check 
                                        type='radio'
                                        id='optionTwo'
                                        onChange={this.onSelect}
                                        value={optionTwo}                                        
                                        label={optionTwo}
                                        checked={this.state.answerSelected === 'optionTwo'}
                                    />
                                </div>                          
                            </Form>
                             <Button variant="primary" className='button_card' onClick={this.handleSubmit}  disabled={this.state.answerSelected === ''}>Submit </Button>
                        </div>                   
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
function mapStateToProps({ questions, users, authedUser}, {id}) {    
    const question = questions[id];
    return {
        author: users[question.author],
        question: question,
        id,
        authedUser,

    }
}


export default connect(mapStateToProps)(AnswerQuestion)