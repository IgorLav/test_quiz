import React from 'react';

const QuizItemOptions = (props) => {
    const options = props.options.map((item, i) => {
        return(
            <li key={item}>
                <label>
                    <input type="radio"
                           name={props.question}
                           defaultChecked={i === 0}
                           onChange={() => props.onHandleAnswer(props._id, item)}/>
                    <span>{item}</span>
                </label>
            </li>
        )
    });

    return (
        <ol className="options">
            {options}
        </ol>
    );
};

export default QuizItemOptions;