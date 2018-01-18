import * as actionTypes from './actionTypes';
import axios from 'axios';
import {genId, shuffleArray} from "../../utils";

export const fetchQuestionsStart = () => ({
    type: actionTypes.FETCH_QUESTIONS_START,
});

export const fetchQuestionsSuccess = (questions) => ({
    type: actionTypes.FETCH_QUESTIONS_SUCCESS,
    questions: questions
});

export const fetchQuestionsFail = (err) => ({
    type: actionTypes.FETCH_QUESTIONS_FAIL,
    error: err
});

export const fetchQuestions = () => {
    return dispatch => {
        dispatch(fetchQuestionsStart());
        axios.get(`https://opentdb.com/api.php?amount=${10}`)
            .then(res => {
                const data = res.data;
                if (data.results) {
                    const mapData = data.results.map(item => {
                        const options = shuffleArray([item.correct_answer, ...item.incorrect_answers]);
                        return {
                            _id: genId(),
                            ...item,
                            options,
                            user_answer:options[0]
                        }});
                    dispatch(fetchQuestionsSuccess(mapData));
                }
            }).catch(err => dispatch(fetchQuestionsFail(err)));
    }
};

export const handleAnswer = (_id, value) => ({
    type: actionTypes.ADD_USER_ANSWER,
    _id,
    user_answer: value
});

export const getQuizResult = () => ({
    type: actionTypes.GET_RESULT
});

export const startQuize = () => ({
    type: actionTypes.QUIZ_TIME_START
});

export const endQuize = () => ({
    type: actionTypes.QUIZ_TIME_END
});
