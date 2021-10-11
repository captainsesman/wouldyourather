

import React, { Component, Fragment } from 'react';
import { handleInitialData } from '../actions/index'
import { connect } from 'react-redux'
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import SortQuestions from './SortQuestions';
import LeadershipBoard from './LeadershipBoard';
import AddQuestion from './AddQuestion';
import LoadingBar from 'react-redux-loading'


class App extends Component {
  componentDidMount() {
     this.props.dispatch(handleInitialData())
  }
  render() {
  
    return (
      <div>
        <Router>
          <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
              {this.props.authedUser === null ? <Route to='/login' component={Login} /> :
                <div> {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Dashboard} />
                    <Route path='/question/:id' component={SortQuestions} />
                    <Route path='/leaderboard' component={LeadershipBoard} /> 
                    <Route path='/add' component={AddQuestion} />
                </div>}        
                </div> 
       
          }
           
        
          </div>
         </Fragment>
        </Router>
      </div>
    )
  }
}

  

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)
