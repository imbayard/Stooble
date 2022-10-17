import React, { useState } from 'react';

// Styling
import './DailyCheckIn.css'

// Components
import GratitudePlatfrom from './GratitudePlatform'

// Data
import Days from '../data/days.json'

export default function DailyCheckIn({
    goals
}) {
    return (
        <div>
            <h3>{getDayName()}'s Check In</h3>
            <GratitudePlatfrom />
        </div>
    )

    function getDayName() {
        const d = new Date().getDay()
        const ind = d == 0 ? 6 : d - 1
        return Days[ind]
    }
}