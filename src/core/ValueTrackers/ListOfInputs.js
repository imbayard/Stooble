import React from 'react'

// Styling
import './ListOfInputs.css'

// Components
import ValueTrackerInput from './ValueTrackerInput'
import TextInput from './TextInput'

export default function ListOfInputs({
    values,
    changer,
    inputType
}) {
    return (
        <div className='list-of-inputs'>
            {
                values.map((value, i) => {
                    return (<ValueTrackerInput
                        label={value.type}
                        inputComponent={
                            inputType === 'text' ?
                                <TextInput
                                    placeHolder="Enter value"
                                    val={value.value}
                                    changer={(val) => changer(val, i)}
                                /> :
                                <> </>
                        }
                    />)
                })
            }
        </div>
    )
}