import React from 'react';
import QuizItemOptions from "./QuizItemOptions";

const QuizItem = ({info, onHandleAnswer}) => {
    return (
        <li className="quiz-list-item well">
            <p dangerouslySetInnerHTML={{__html: info.question}}/>
            <QuizItemOptions {...info} onHandleAnswer={onHandleAnswer} />
        </li>
    )
};

export default QuizItem;