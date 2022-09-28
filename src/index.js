import ReactDOM from 'react-dom';
import React from 'react';

// Components
import GratitudePlatform from "./core/GratitudePlatform";
import WeekOutline from "./core/WeekOutline";

// Styling
import './index.css';

const App = () => {
    return (
        <div className='index-app'>
            <h1>Stooble.</h1>
            <WeekOutline />
            <GratitudePlatform />
        </div>
        )
}

ReactDOM.render(<App />, document.getElementById('app'));