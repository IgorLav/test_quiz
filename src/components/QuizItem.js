import React from 'react';
import QuizItemOptions from "./QuizItemOptions";

const QuizItem = ({info}) => {
    return (
        <li>
            <p dangerouslySetInnerHTML={{__html: info.question}}/>
            <QuizItemOptions {...info} />
        </li>
    )
};

export default QuizItem;