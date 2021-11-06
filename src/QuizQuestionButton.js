import React, { Component } from 'react';

class QuizQuestionButton extends Component {

    handleCick() {
        this.props.clickHandler(this.props.button_text)
    }

    render(){
        return (
            <li><button 
                    onClick={this.handleCick.bind(this)}
                >
                    {this.props.button_text}
                </button>
            </li>
        )
    }

}

export default QuizQuestionButton;