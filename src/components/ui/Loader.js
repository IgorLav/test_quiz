import React from 'react';
import "./loader.css";

const Loader = (props) => {
    const cubes = Array(9).fill(0).map((item, i) => <div className={`cube cube${i}`} key={i}/>);
    return (
        <div className="loader-wrap">
            <div className="loader">
                {cubes}
            </div>
        </div>
    );
};

export default Loader;