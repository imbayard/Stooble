import React from 'react'

import CIModule from './CIModule'
import ValueTrackerDisplayOnly from '../ValueTrackers/ValueTrackerDisplayOnly'
import ListOfInputs from '../ValueTrackers/ListOfInputs'

export default function WorkoutModule({
    workoutConstants,
    handleWorkoutsChange,
    workouts
}) {
    return (
        <CIModule
            header={workoutConstants.header}
            MainTracker={
                <ValueTrackerDisplayOnly
                    label={workoutConstants.label}
                    value="1 Hour 15 Minutes"
                />
            }
            CIBody={
                <ListOfInputs
                    changer={handleWorkoutsChange}
                    inputType='text'
                    values={workouts}
                />
            }
        />
    )
}