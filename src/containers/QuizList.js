import React from 'react';
import QuizItem from '../components/QuizItem';

class QuizList extends React.Component {
    componentDidMount() {
        this.props.onQuizeStart();
    }
    render () {
        const questions = this.props.questions.map(item => <QuizItem info={item}
                                                                onHandleAnswer={this.props.onHandleAnswer}
                                                                key={item._id}
                                                                answerHandler={this.props.answerHandler}
        />);

        return (
            <form>
                <ol>
                    {questions}
                </ol>
                <button onClick={(e)=> this.props.showResult(e)}>Show me the result!</button>
            </form>
        );
    }
}

export default QuizList;