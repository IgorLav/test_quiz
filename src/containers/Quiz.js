import React from 'react';
import QuizList from "./QuizList";
import {withRouter} from "react-router-dom";
import * as actions from "../store/actions";
import {connect} from "react-redux";
import Loader from "../components/ui/Loader";

class Quiz extends React.Component {
    componentDidMount() {
        this.props.onFetchQuestions();
    }

    answerHandler = (_id, answer) => {
        this.setState({
            answers: {
                _id,
                answer: answer
            }
        });
    };

    showResult = (e) => {
        e.preventDefault();
        this.props.history.push('/result')
    };

    render() {
        const {loading, questions} = this.props;
        return (
            <div className="page">
                {!loading && questions ? (
                    <QuizList questions={questions}
                              answerHandler={this.answerHandler}
                              showResult={(this.showResult)}
                              onHandleAnswer={this.props.onHandleAnswer}
                              onQuizStart={this.props.onQuizStart}
                    />
                ) : <Loader/>}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onFetchQuestions: () => dispatch(actions.fetchQuestions()),
    onHandleAnswer: (_id, value) => dispatch(actions.handleAnswer(_id, value)),
    onQuizStart: () => dispatch(actions.startQuize())
});

const mapStateToProps = state => ({
    questions: state.questions.questions,
    loading: state.questions.loading,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quiz));