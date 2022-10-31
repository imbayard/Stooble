import React from 'react'

// Components
import CIModule from './CIModule'
import ValueTrackerDisplayOnly from '../ValueTrackers/ValueTrackerDisplayOnly'
import ValueTrackerInput from '../ValueTrackers/ValueTrackerInput'
import TextInput from '../ValueTrackers/TextInput'

export default function SleepModule({
    sleepConstants,
    sleep,
    handleSleepChange
}) {
    return (
        <CIModule
            header={sleepConstants.header}
            MainTracker={
                <ValueTrackerDisplayOnly
                    label={sleepConstants.label}
                    value="7 Hours 20 Minutes"
                />
            }
            CIBody={
                <div>
                    <ValueTrackerInput
                        label='What time did you wake up?'
                        inputComponent={
                            <TextInput
                                placeHolder="wake up time"
                                changer={(val) => handleSleepChange('wake', val)}
                                val={sleep.wake}
                            />
                        }
                    />
                    <ValueTrackerInput
                        label='What time did you go to bed?'
                        inputComponent={
                            <TextInput
                                placeHolder="in bed time"
                                changer={(val) => handleSleepChange('sleepAt', val)}
                                val={sleep.sleepAt}
                            />
                        }
                    />
                </div>
            }
        />
    )
}