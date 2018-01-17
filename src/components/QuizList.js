import React from 'react';
import QuizItem from './QuizItem';

const QuizList = (props) => {
    const questions = props.questions.map(item => <QuizItem info={item} key={item._id}/>);
    return (
        <form onSubmit={props.onSubmit} >
            <ol>
                {questions}
            </ol>
            <button type="submit">Show me the result!</button>
        </form>
    );
};

export default QuizList;