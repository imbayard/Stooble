import React from 'react'

// Styling
import './ValueTrackerInput.css'

export default function ValueTrackerInput({
    label,
    inputComponent
}) {
    return (
        <div className='value-tracker-input'>
            <p className='vt-i-label'>{label}</p>
            {inputComponent}
        </div>
    )
}