import ReactDOM from 'react-dom';
import React from 'react';

// Components
import GratitudePlatform from "./core/GratitudePlatform";

const App = () => {
    return (
        <div>
            <h1>Stooble.</h1>
            <GratitudePlatform />
        </div>
        )
}

ReactDOM.render(<App />, document.getElementById('app'));