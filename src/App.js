import React, {Component} from 'react';
import './App.css';
import Quiz from "./containers/Quiz";

class App extends Component {
    componentDidMount() {

    }

    state = {
        startQuiz: false,
        endQuiz: false
    };

    startQuiz = (e) => {
        this.setState({
            startQuiz: true,
            endQuiz: false
        })
    };

    endQuiz = (e) => {
        this.setState({
            startQuiz: false,
            endQuiz: true
        })
    };

    render() {
        const {startQuiz, endQuiz} = this.state;
        return (
            <div className="App">
                {!endQuiz && !startQuiz && <button onClick={(e) => this.startQuiz(e)}>Start Quiz</button>}
                {startQuiz && <Quiz/>}
                {endQuiz && <button onClick={(e) => this.startQuiz(e)}>Play again</button>}
            </div>
        );
    }
}

export default App;
