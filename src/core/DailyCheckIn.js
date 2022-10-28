import React, { useState } from 'react';

// Styling
import './DailyCheckIn.css'

// Components
import GratitudePlatfrom from './GratitudePlatform'
import CIModule from './CheckInModules/CIModule';
import ValueTrackerDisplayOnly from './ValueTrackers/ValueTrackerDisplayOnly';

// Data
import Days from '../data/days.json'

export default function DailyCheckIn({
    
}) {
    return (
        <div className='daily-check-in'>
            <h3 className='main-ci-header'>{getDayName()}</h3>
            <span className='ci-module-row'>
                <CIModule
                    header='Sleep'
                    MainTracker={
                        <ValueTrackerDisplayOnly
                            label="Total Sleep Last Night:"
                            value="7 Hours 20 Minutes"
                        />
                    }
                />
                <CIModule header='Workout' />
            </span>
            <span className='ci-module-row'>
                <CIModule header='Phone' />
                <CIModule header='Reading' />
            </span>
            <span className='ci-module-row'>
                <CIModule
                    header='Money'
                    MainTracker={
                        <ValueTrackerDisplayOnly
                            label="Total Money Spent Today:"
                            value="$28.42"
                        />
                    }
                />
                <CIModule
                    header='Mealsnacks'
                    MainTracker={
                        <span style={{display:'grid', gridTemplateColumns:'50% 50%', width:'100%', height:'100%'}}>
                            <ValueTrackerDisplayOnly
                                label="Total Mealsnacks:"
                                value="4"
                            />
                            <ValueTrackerDisplayOnly
                                label="Total Waters:"
                                value="3"
                            />
                        </span>
                    }
                />
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