import React, { useState } from 'react';

// Styling
import './DailyCheckIn.css'

// Components
import GratitudePlatfrom from './GratitudePlatform'
import CIModule from './CheckInModules/CIModule';
import ValueTrackerDisplayOnly from './ValueTrackers/ValueTrackerDisplayOnly';

// Data
import Days from '../data/days.json'
import CIs from '../data/checkInTypes.json'

export default function DailyCheckIn({
    
}) {
    return (
        <div className='daily-check-in'>
            <h3 className='main-ci-header'>{getDayName()}</h3>
            <span className='ci-module-row'>
                <CIModule
                    header={CIs.sleep.header}
                    MainTracker={
                        <ValueTrackerDisplayOnly
                            label={CIs.sleep.label}
                            value="7 Hours 20 Minutes"
                        />
                    }
                />
                <CIModule
                    header={CIs.workout.header}
                    MainTracker={
                        <ValueTrackerDisplayOnly
                            label={CIs.workout.label}
                            value="1 Hour 15 Minutes"
                        />
                    }
                />
            </span>
            <span className='ci-module-row'>
                <CIModule
                    header={CIs.phone.header}
                    MainTracker={
                        <ValueTrackerDisplayOnly
                            label={CIs.phone.label}
                            value="3 Hours 20 Minutes"
                        />
                    }
                />
                <CIModule
                    header={CIs.reading.header}
                    MainTracker={
                        <ValueTrackerDisplayOnly
                            label={CIs.reading.label}
                            value="45 Minutes"
                        />
                    }
                />
            </span>
            <span className='ci-module-row'>
                <CIModule
                    header={CIs.money.header}
                    MainTracker={
                        <ValueTrackerDisplayOnly
                            label={CIs.money.label}
                            value="$28.42"
                        />
                    }
                />
                <CIModule
                    header={CIs.mealsnacks.header}
                    MainTracker={
                        <span style={{display:'grid', gridTemplateColumns:'50% 50%', width:'100%', height:'100%'}}>
                            <ValueTrackerDisplayOnly
                                label={CIs.mealsnacks.label1}
                                value="4"
                            />
                            <ValueTrackerDisplayOnly
                                label={CIs.mealsnacks.label2}
                                value="3"
                            />
                        </span>
                    }
                />
            </span>
            <span className='ci-module-row'>
                <CIModule
                    header={CIs.mindfulness.header}
                    MainTracker={
                        <ValueTrackerDisplayOnly
                            label={CIs.mindfulness.label}
                            value="2"
                        />
                    }
                />
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