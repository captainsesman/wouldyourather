import React, { Component } from "react";
import { Button, Card, Form } from 'react-bootstrap';
import { connect } from "react-redux";

import logo from '../logo.svg';
import {handleSetAuthUser} from '../actions/authedUsers'

class Login extends Component {

    state={
        user: '',
        toHome: false,
    }

    handleAuthUserSelect = (e) => {
        e.preventDefault();
        this.setState(()=>({
            user: e.target.value
        }))
    }
    
    handleSubmit= (e) => {
        e.preventDefault();
        const { dispatch } = this.props
        const { user } = this.state   
        dispatch(handleSetAuthUser(user)
        )
        this.setState(()=>({
            user: '',
            toHome: true,
        }))
        
    }
    render() {

        const { users } = this.props
       
        return (
            <div>
                <div className='container'>              
                
                    <Card className='d-flex justify-content-center text-center' style={{ width: '50rem' }}>                   
                    <Card.Body>
                            <Card.Title><h3 className='text-justify'>
                                Welcome  To the Would You Rather App</h3>
                                <img src={logo} style={{width:'10rem'}} className=''/>
                            </Card.Title>
                            
                        <Card.Text className='d-flex justify-content-center text-center'>
                            <Form.Select
                                name="login"
                                onChange={this.handleAuthUserSelect}
                                value={this.state.authUser}
                                id="login"  style={{ width: '20rem' }} className='text-center'>
                            <option value={''}>Select User</option>
                            {Object.values(users).map((user) =>
                                <option key={user.id} value={user.id}>   {user.name}     </option>
                            )}                         
                                        
                        </Form.Select>
                        </Card.Text>
                        <Button variant="primary" style={{ width:'18rem', marginBottom:'30px' }} onClick={this.handleSubmit}>Sign In</Button>
                    </Card.Body>
                    </Card>

               </div>
            </div>
        )
    }
}
function mapStateToProps({ users,authedUser }) {
    return {
        users,
        authedUser: authedUser ? authedUser : null
    }
}

export default connect(mapStateToProps)(Login)