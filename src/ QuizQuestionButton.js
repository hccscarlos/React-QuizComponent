import React, { Component } from 'react';

class QuizQuestionButton extends Component {

    render(){
        // console.log("QuizQuestion.render()", this.props.quiz_question);
        return (
            <li><button>{this.props.button_text}</button></li>
        )
    }

}

export default  QuizQuestionButton;