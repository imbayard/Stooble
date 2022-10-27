import React, { useState } from 'react';

// Styling
import './DailyCheckIn.css'

// Components
import GratitudePlatfrom from './GratitudePlatform'
import CIModule from './CheckInModules/CIModule';

// Data
import Days from '../data/days.json'

export default function DailyCheckIn({
    
}) {
    return (
        <div className='daily-check-in'>
            <h3 className='main-ci-header'>{getDayName()}</h3>
            <span className='ci-module-row'>
                <CIModule header='Sleep' />
                <CIModule header='Workout' />
            </span>
            <span className='ci-module-row'>
                <CIModule header='Phone' />
                <CIModule header='Reading' />
            </span>
            <span className='ci-module-row'>
                <CIModule header='Money' />
                <CIModule header='Mealsnacks' />
            </span>
            <span className='ci-module-row'>
                <CIModule header='Mindfulness' />
                <CIModule header='Mood' />
            </span>
        </div>
    )

    function getDayName() {
        const d = new Date().getDay()
        const ind = d == 0 ? 6 : d - 1
        return Days[ind]
    }
}