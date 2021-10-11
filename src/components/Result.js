import React, {Component} from 'react'
import { Card,  ProgressBar } from 'react-bootstrap';
import { connect } from 'react-redux'
class Result extends Component {
    
    calculatePercent(voteCount, totalCount) {
         return Math.round((voteCount / totalCount) * 100);
    }
    render() {

        const { author, question } = this.props

      const optOneText = question.optionOne.text
        const optTwoText = question.optionTwo.text
        const optionOneCount = question.optionOne.votes.length
        const optionTwoCount = question.optionTwo.votes.length
        const totalCount = optionOneCount + optionTwoCount
        const option1Percent = this.calculatePercent(optionOneCount, totalCount)
        const option2Percent = this.calculatePercent(optionTwoCount, totalCount)
        
      return (
      <div>
             <Card style={{ width: '50rem' }}>
                <Card.Header as="h5">{author.name} Asks:</Card.Header>
                    <Card.Body className='question_body'>
                        <div className ='question_left'>
                            <img src={author.avatarURL} alt="Pic" className='avatar'/>
                        </div>

                        <div className='question_right '>
                            <Card.Title > Results</Card.Title>
                      <div className='result'>
                              <p> Would You rather be {optOneText }</p>
                          <ProgressBar now={option1Percent} label={`${option1Percent}%`} />
                           <p> {optionOneCount} Out of {totalCount} Votes </p>
                      </div>
                      
                       <div className='result'>
                              <p> Would You rather be { optTwoText}</p>
                          <ProgressBar now={option2Percent} label={`${option2Percent}%`} />
                          <p> {optionTwoCount} Out of {totalCount} Votes </p>
                     </div>
                            
                        </div>                   
                    </Card.Body>
                </Card>
    </div>
    
  )
}
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
     const question = questions[id];
    return {
        authedUser,
        author: users[question.author],
        question: question,
        id,
    }
}

export default connect(mapStateToProps)(Result)