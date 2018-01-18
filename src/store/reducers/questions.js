import * as actionTypes from '../actions/actionTypes';

const initialState = {
    questions: [],
    loading: false,
    error: null,
    result: null,
    time: {
        start: 0,
        end: 0,
        total: 0
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_QUESTIONS_START:
            return {
                ...state,
                loading: true,
                result: null
            };
        case actionTypes.FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.questions,
                loading: false
            };
        case actionTypes.FETCH_QUESTIONS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case actionTypes.QUIZ_TIME_START:
            return {
                ...state,
                time: {
                    ...state.time,
                    result: 0,
                    start: Date.now(),
                }
            };
        case actionTypes.QUIZ_TIME_END:
            const endTime = Date.now();
            const total = state.time.start ? endTime - state.time.start : 0;
            return {
                ...state,
                time: {
                    ...state.time,
                    end: endTime,
                    total: total / 1000
                }
            };
        case actionTypes.ADD_USER_ANSWER:
            const questions = state.questions;
            const index = questions.findIndex(item => item._id === action._id);
            const editedQuestion = [...questions.slice(0, index),
                {
                    ...questions[index],
                    user_answer: action.user_answer
                },
                ...questions.slice(index + 1)];
            return {
                ...state,
                questions: editedQuestion
            };
        case actionTypes.GET_RESULT:
            const correctAnswers = state.questions.filter(item => item.correct_answer === item.user_answer).length;
            const questionsCount = state.questions.length;
            const result = questionsCount ? (correctAnswers / state.questions.length * 100).toFixed(2) + '%' : (
                'You should complete the quiz before you can see the result'
            );

            return {
                ...state,
                result: result
            };
        default:
            return state
    }
};

export default reducer;