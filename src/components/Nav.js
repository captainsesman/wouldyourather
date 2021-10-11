
import React, {Component }from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogOut } from '../actions/authedUsers';

class Nav extends Component {


  handleLogOut = (e) => {
    e.preventDefault()
    const { dispatch} = this.props  
    dispatch(handleLogOut())
  }
  
  render() {

    const {authedUser, user} = this.props
    return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/asknewquestion' activeClassName='active'>
            New Question
          </NavLink>
        </li>
         <li>
          <NavLink to='/leadershipboard' activeClassName='active'>
            Leadership Board
          </NavLink>
        </li>
          {authedUser !== null ?
            <div style={{marginLeft:'400px', float:'left'}}>             
              <li className='navLink'>
                 <span> { user.name}</span>
                  <NavLink to='/' exact activeClassName='active' onClick={this.handleLogOut}> Log Out</NavLink>
              </li>
           </div> :
            <li>

            </li>
          }
          
      </ul>
    </nav>
  )
 }
}
function mapStateToProps({authedUser,users}) {
        return {
            authedUser,
            user: users[authedUser],
        }
    }

export default connect(mapStateToProps)(Nav)