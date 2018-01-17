import React from 'react';
import axios from 'axios';
import QuizList from "../components/QuizList";
import {genId} from "../utils";

export default class Quiz extends React.Component {
    state = {
        questions: null,
        loading: false,
        answers: []
    };

    componentDidMount() {
        this.setState({
            loading: true
        });

        axios.get(`https://opentdb.com/api.php?amount=${10}`)
            .then(res => {
                const data = res.data;
                if (data.results) {
                    const mapData = data.results.map(item => (
                        {
                            _id: genId(),
                            ...item
                        }));
                    this.setState({
                        questions: mapData,
                        loading: false
                    });
                }

            }).catch(err => console.log(err));
    }

    answerHandler = (e, _id, question, answer, type) => {
        e.preventDefault();

        this.setState((prevState) => ({
            questions: [
                ...prevState.questions,
                {
                    _id,
                    question,

                }
            ]
        }));
    };

    render() {
        const {loading, questions} = this.state;

        return (
            <div>
                {!loading && questions ? <QuizList questions={this.state.questions}/> : 'loading...'}
            </div>
        );
    }
}