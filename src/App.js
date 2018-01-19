import React from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import './assets/style/styles.css';
import Quiz from "./containers/Quiz";
import Result from "./containers/Result";
import Home from "./components/Home";

const App = (props) => (
    <div className="App">
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/quiz" component={Quiz} exact/>
            <Route path="/result" component={Result} exact/>
        </Switch>
    </div>
);

export default withRouter(App);
