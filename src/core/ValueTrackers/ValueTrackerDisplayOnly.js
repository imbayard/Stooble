import React from 'react'

// Styling
import './ValueTrackerDisplayOnly.css'

export default function ValueTrackerDisplayOnly({
    label,
    value
}) {
    return (
        <div className="value-tracker-display-only">
            <p className='vt-do-label'>{label}</p>
            <p className='vt-do-value'>{value}</p>
        </div>
    )
}