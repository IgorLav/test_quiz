import React from 'react';
import QuizItem from './QuizItem';

const QuizList = (props) => {
    const questions = props.questions.map(item => <QuizItem info={item}
                                                            onHandleAnswer={props.onHandleAnswer}
                                                            key={item._id}
                                                            answerHandler={props.answerHandler}
    />);
    props.onQuizeStart();
    return (
        <form>
            <ol>
                {questions}
            </ol>
            <button onClick={(e)=> props.showResult(e)}>Show me the result!</button>
        </form>
    );
};

export default QuizList;