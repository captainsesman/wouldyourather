import React, { Component } from "react";
import { connect } from 'react-redux'
import { Button, Card} from 'react-bootstrap';

import { Link } from 'react-router-dom'

class Question extends Component {

    

    render() {
       
        const { question,  author , id } = this.props
        const { optionOne } = question
        const {name,avatarURL} =  author 
    
        return (

            <div>
                <Card style={{ width: '50rem' }}>
                    <Card.Header as="h5">{ name}</Card.Header>
                    <Card.Body className='question_body'>
                        <div className ='question_left'>
                            <img src={avatarURL} alt="Pic" className='avatar'/>
                        </div>

                        <div className='question_right text-center'>
                            <Card.Title >  { `Would you rather ${optionOne.text}`}</Card.Title>
                             <Link to={`/question/${id}`} > <Button variant="primary" style={{ width:'18rem', Textalign:'center', backgroundColor:'green'}} > View Poll </Button>  </Link>       
                        
                        </div>                   
                    </Card.Body>
                </Card>
            </div>
        )
    }
}


function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id];
    const author = question ? users[question.author] : null;
  return {
    authedUser,
     author :  author ,
    question: question,
  };
}

export default connect(mapStateToProps)(Question)