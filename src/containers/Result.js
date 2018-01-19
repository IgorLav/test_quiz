import React from 'react';
import {connect} from "react-redux";
import * as actions from "../store/actions";
import {Link} from "react-router-dom";

class Result extends React.Component {
    componentDidMount() {
        this.props.onGetQuizResult();
        this.props.onGetTime();
    }

    render() {
        const result = this.props.result;
        const time = this.props.time;
        return (
            <div className="container">
                <div className="well page page-bg">
                    <h1 className="page-title">Quiz info:</h1>
                    <p>Result: <strong>{result}</strong></p>
                    <p>Your time: {time} s</p>
                    <Link to="/quiz" className="btn btn-primary">{ result ? 'Play again': 'Start quiz now'}</Link>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onGetQuizResult: () => dispatch(actions.getQuizResult()),
    onGetTime: () => dispatch(actions.endQuize())
});

const mapStateToProps = state => ({
    result: state.questions.result,
    time: state.questions.time.total
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);