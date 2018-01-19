import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
    <div className="container">
        <div className="well page page-bg">
            <h1 className="page-title">Click button beneath to start quiz</h1>
            <Link to={'/quiz'} className="btn btn-primary">Start Quiz</Link>
        </div>
    </div>
);

export default Home;