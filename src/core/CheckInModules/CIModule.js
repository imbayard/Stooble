import React from 'react';

// Styling
import './CIModule.css';

export default function CIModule({
    header,
    MainTracker,
    CIBody
}) {
    return (
        <div className='ci-module'>
            <p className='ci-module-header'>{header}</p>
            {MainTracker}
            {CIBody}
        </div>
    )
}