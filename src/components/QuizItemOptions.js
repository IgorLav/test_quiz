import React from 'react';
import {shuffleArray} from '../utils';

const QuizItemOptions = (props) => {
    const options = shuffleArray([props.correct_answer, ...props.incorrect_answers]).map((item, i) => (
        <li key={item}>
            <label>
                {props.type === 'boolean' ? (
                    <input type="radio" value={props.item} name={props.question} defaultChecked={i === 0}/>
                ) : (
                    <input type="checkbox" value={props.item} name={props.question}/>
                )}
                <span>{item}</span>
            </label>
        </li>
    ));

    return (
        <ol className="options">
            {options}
        </ol>
    );
};

export default QuizItemOptions;