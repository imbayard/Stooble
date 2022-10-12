import React, { useState } from 'react';

export default function DayOutline({
    dayName,
    goals
}) {
    return (
        <div className='day-outline'>
            <h5>{dayName}</h5>
            {goals.map(goal => {
                return (
                    <p key={goal}>{goal}</p>
                )
            })}
        </div>
    );
}