import React from 'react';
import {Route, withRouter, Switch, Link} from 'react-router-dom';
import './App.css';
import Quiz from "./containers/Quiz";
import Result from "./containers/Result";

const App = (props) => (
    <div className="App">
        <Switch>
            <Route path="/" render={() => (
                <React.Fragment>
                    <h1>Click button beneath to start quiz</h1>
                    <Link>Start Quiz</Link>
                </React.Fragment>
            )} exact/>

            <Route path="/quiz" component={Quiz} exact/>

            <Route path="/result" render={() => <Result/>} exact/>
        </Switch>
    </div>
);

export default withRouter(App);
