import React, { useState } from 'react';

// Styling
import './DailyCheckIn.css'

// Components
import GratitudePlatfrom from './GratitudePlatform'
import CIModule from './CheckInModules/CIModule';
import ValueTrackerDisplayOnly from './ValueTrackers/ValueTrackerDisplayOnly';
import TextInput from './ValueTrackers/TextInput'
import ValueTrackerInput from './ValueTrackers/ValueTrackerInput'
import ListOfInputs from './ValueTrackers/ListOfInputs'
import SleepModule from './CheckInModules/SleepModule'
import WorkoutModule from './CheckInModules/WorkoutModule'

// Data
import Days from '../data/days.json'
import CIs from '../data/checkInTypes.json'

export default function DailyCheckIn({
    
}) {
    const [sleep, setSleep] = useState({ wake: '', sleepAt: '', totalSleep: '' });
    const handleSleepChange = (type, value) => {
        if (type === 'wake') {
            setSleep({wake: value, sleepAt: sleep.sleepAt, totalSleep: sleep.totalSleep})
        } else if (type === 'sleepAt') {
            setSleep({sleepAt: value, totalSleep: sleep.totalSleep, wake: sleep.wake})
        }
        console.log(sleep)
    }
    const [workouts, setWorkouts] = useState([{ type: 'Boxing', value: '' }, {type: 'Lift', value: ''}])
    const handleWorkoutsChange = (value, index) => {
        const newWos = []
        for (let i = 0; i < workouts.length; i++) {
            if (i === index) {
                const old = workouts[i]
                newWos.push({ type: old.type, value: value })
            } else {
                newWos.push(workouts[i])
            }
        }
        setWorkouts(newWos)
        console.log(workouts)
    }
    return (
        <div className='daily-check-in'>
            <h3 className='main-ci-header'>{getDayName()}</h3>
            <span className='ci-module-obj'>
                <SleepModule
                    sleepConstants={CIs.sleep}
                    sleep={sleep}
                    handleSleepChange={handleSleepChange}
                />
            </span>
            <span className='ci-module-obj'>
                <WorkoutModule
                    workoutConstants={CIs.workout}
                    workouts={workouts}
                    handleWorkoutsChange={handleWorkoutsChange}
                />
            </span>
            <span className='ci-module-obj'>
                <CIModule
                    header={CIs.phone.header}
                    MainTracker={
                        <ValueTrackerDisplayOnly
                            label={CIs.phone.label}
                            value="3 Hours 20 Minutes"
                        />
                    }
                />
            </span>
            <span className='ci-module-obj'>
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
            <span className='ci-module-obj'>
                <CIModule
                    header={CIs.money.header}
                    MainTracker={
                        <ValueTrackerDisplayOnly
                            label={CIs.money.label}
                            value="$28.42"
                        />
                    }
                />
            </span>
            <span className='ci-module-obj'>
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
            <span className='ci-module-obj'>
                <CIModule
                    header={CIs.mindfulness.header}
                    MainTracker={
                        <ValueTrackerDisplayOnly
                            label={CIs.mindfulness.label}
                            value="2"
                        />
                    }
                />
            </span>
            <span className='ci-module-obj'>
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