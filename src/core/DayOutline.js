import React, { useState } from 'react';

export default function DayOutline({
    dayName
}) {
    return (
        <div className='day-outline'>
            <h5>{dayName}</h5>
        </div>
    );
}