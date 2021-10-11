import React, { Component } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { handleNewQuestion } from '../actions/questions';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class AddQuestion extends Component {

        state = {
       optionOne: '',
        optionTwo: '',
       redirectPage:false,
    }
    
    onChange = (e) => {
        e.preventDefault();      
        const option = e.target.name;

        this.setState(()=>({
                [option]: e.target.value
        }))     
       
    }

    handleSubmit = (e) => {
        e.preventDefault();  
        const { optionOne, optionTwo, } = this.state
        const {  authedUser, dispatch } = this.props

   
         dispatch(handleNewQuestion({
            optionOne:optionOne, optionTwo:optionTwo, author:authedUser
         }))
        
        
        this.setState(()=> ({
            optionOne: '',
            optionTwo: '',
            redirectPage: true,
        }))
    }
    render() {
        const { optionOne, optionTwo,  redirectPage } = this.state
        
         if ( redirectPage === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
            <Card className='d-flex justify-content-center' style={{ width: '50rem' }}>                   
            <Card.Body>
                <Card.Title ><h3 className='text-justify, text-center'>Create New Question</h3></Card.Title>
                <Card.Text>
                    <div className='text-center'>
                        <p> Complete the Phrase below by entering two options below</p>
                        <h2> Would You Rather ................</h2>
                    </div>
                    <Form.Control size="lg" type="text"
                        value={optionOne}
                        onChange={this.onChange}
                        name='optionOne'
                        id='optionOne'                         
                        placeholder="Option One" />
                        <br />
                    <Form.Control size="lg" type="text"
                        value={optionTwo}
                        onChange={this.onChange}
                        name='optionTwo'
                        id='optionTwo'
                        
                        placeholder="Option Two" />
                </Card.Text>
                <Button variant="primary" style={{ width:'18rem', textAlign:'center' }} className='text-center' disabled={optionOne === '' && optionTwo === ''} onClick={this.handleSubmit} >Submit</Button>
            </Card.Body>
            </Card>
            </div>
        )
    }
}

function mapStateToProps({authedUser}){
    return{
        authedUser
    }
}

export default connect(mapStateToProps)(AddQuestion)