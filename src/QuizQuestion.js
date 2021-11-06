import React, { Component } from 'react';
import QuizQuestionButton from "./QuizQuestionButton"

class QuizQuestion extends Component {

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer)
            this.props.showNextQuestionHandler();
    }    

    render(){
        console.log("QuizQuestion.render()", this.props.quiz_question)
        return (
            <React.Fragment>
            <section>
            <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
            <ul>
                {this.props.quiz_question.answer_options.map((answer_option, index) => {
                    return (
                        <QuizQuestionButton 
                            key={index} 
                            button_text={answer_option} 
                            clickHandler={this.handleClick.bind(this)}
                        />
                    )
                })}
            </ul>
            </section>
            </React.Fragment>   
        )
    }

}

export default QuizQuestion;