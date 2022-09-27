import React, { useState } from 'react';

// Styling
import './GratitudePlatform.css';

export default function GratitudePlatform() {
    const vals = [1, 2, 3];
    const [gratitudes, setGratitudes] = useState(['', '', '']);
    const handleGratitudeChange = (value, index) => {
        const newGratitudes = gratitudes.map((grat, i) => {
            if (i === (index-1)) {
                return value;
            } else {
                return grat;
            }
        });
        setGratitudes(newGratitudes);
    }
    return (
        <div className='gratitude-platform'>
            <h3 className='gratitude-header'>Gratitude Journal</h3>
            <p className='gratitude-descriptor'>What are you grateful for today?</p>
            <span className='gratitude-form-wrapper'>
                {vals.map(val => {
                    return (
                        <div key={val}>
                            <label htmlFor={val}>{val}.</label>
                            <input
                                id={val}
                                onChange={e => handleGratitudeChange(e.target.value, val)}
                                maxLength="25"
                            />
                        </div>
                    );
                })}
            </span>
        </div>
    )
}