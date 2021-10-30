import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {quiz_position: 1};
    }

    render(){
        // const isQuizEnd = (this.state.quiz_position === quizData.quiz_questions.length);
        const isQuizEnd = true;
        console.log("render()", {isQuizEnd, quiz_position:this.state.quiz_position, quiz_questions:quizData.quiz_questions.length});
        return (
            <main>
                <section>
                <p>{quizData.quiz_questions[0].instruction_text}</p>
                </section>
                {isQuizEnd ?
                <QuizEnd></QuizEnd>
                :
                <section className="buttons">
                <ul>
                    <QuizQuestion 
                        quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}
                    />
                </ul>
                </section>}
            </main>
        )
    }

}

export default Quiz;
