import React, { Component } from "react";
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap';
import { BiCertification } from "react-icons/bi";

class UserScore extends Component {

     secoreCount =(user)=> {
        return user.questions.length + Object.keys(user.answers).length;
         }
    

    render() {
        const { user } = this.props   
        const questionsAsked = user.questions.length
         const questionsAnsweredCount = Object.keys(user.answers).length
        const totalCount = questionsAsked + questionsAnsweredCount
        return (
          
            <div>
                <Card style={{ width: '50rem' }}>               
                    <Card.Body className='question_body'>
                        <div className ='question_left'>
                            <img src={user.avatarURL} alt="Pic" className='avatar'/>
                        </div>
                        <div className ='question_right'>
                             <p className='center'>{user.name}</p>
                            <p>Questions Asked: {questionsAsked}</p>
                            <p>Questions Answered: {questionsAnsweredCount}</p>
                        </div>                        
                        <div className ='question_right text-center' style={{ width: '10rem', height:'10rem', border: '1px solid #000',  padding:'20px'}}>
                            <h1 className='center'>Score:</h1>
                                <BiCertification />
                             <h3>{totalCount}</h3>
                        </div>                                      
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({ users}, {id}) {       
    const user = users[id]
    return {      
        id,
        user,

    }
}

export default connect(mapStateToProps)(UserScore)
