import React, { Component } from 'react';
import QuizQuestionButton from "./QuizQuestionButton"

class QuizQuestion extends Component {
    constructor(props){
        super(props);
        this.state = {quiz_position: 1};
    }

    render(){
        return (
            <QuizQuestionButton 
                button_text={this.props.quiz_question.answer_options[0]}
            />
        )
    }

}

export default QuizQuestion;