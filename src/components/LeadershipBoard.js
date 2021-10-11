import React, { Component } from "react";
import { connect } from 'react-redux'
import UserScore from "./UserScore";



class LeadershipBoard extends Component {
    render() {

        const {  sortedUsers } = this.props       
        return (
            <div>
                 <h3 className="center">Leaderboard</h3>
                <ul>

                    {sortedUsers.map((user, index) => (
                        <li key={index} className="leaders">                            
                            <UserScore id={user.id}/>
                        </li>
                     ))}
                </ul>
            </div>
        )
    }
}


function mapStateToProps({users}) {
    
    const sortUsers= Object.values(users)
    const sortedUsers = sortUsers.sort((a,b)=>
            (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length))
    return{
      sortedUsers, 
    }

}

export default connect(mapStateToProps)(LeadershipBoard)
