import React from 'react';
import QuizItem from '../components/QuizItem';

class QuizList extends React.Component {
    componentDidMount() {
        this.props.onQuizStart();
    }

    render() {
        const questions = this.props.questions.map(item => (
            <QuizItem info={item}
                      onHandleAnswer={this.props.onHandleAnswer}
                      key={item._id}
                      answerHandler={this.props.answerHandler}/>
        ));

        return (
            <div className="container">
                <form>
                    <ol className="quiz-list">
                        {questions}
                    </ol>
                    <button className="btn btn-success" onClick={(e) => this.props.showResult(e)}>Show me the result!</button>
                </form>
            </div>
        );
    }
}

export default QuizList;