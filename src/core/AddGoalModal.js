import React, { useState } from 'react'

// Styling
import './AddGoalModal.css'

// Data
import Days from '../data/days.json';

export default function AddGoalsModal({
    isModalOpen,
    toggleModalOpen,
    goals,
    setGoals
}) {
    const [addGoals, setAddGoals] = useState(['', '', '', '', '', '', ''])
    const deleteGoal = (weekIndex, goalIndex) => {
        const newGoals = []
        for (let i = 0; i < goals.length; i++) {
            const dayGoals = goals[i]
            if (i != weekIndex) {
                newGoals.push(dayGoals)
            } else {
                const newDayGoals = []
                for (let j = 0; j < dayGoals.length; j++) {
                    const goal = dayGoals[j]
                    if (j != goalIndex) {
                        newDayGoals.push(goal)
                    }
                }
                newGoals.push(newDayGoals)
            }
        }
        setGoals(newGoals)
    }
    const handleSubmit = (value, weekIndex) => {
        const newWeek = []
        for (let i = 0; i < goals.length; i++) {
            if (i == weekIndex) {
                const dayGoals = goals[i]
                const newGoals = [value, ...dayGoals]
                newWeek.push(newGoals)
            } else {
                newWeek.push(goals[i])
            }
        }
        setGoals(newWeek)
        handleChange('', weekIndex)
    }
    const handleChange = (value, weekIndex) => {
        const newAddGoals = []
        for (let i = 0; i < addGoals.length; i++) {
            if (i == weekIndex) {
                newAddGoals.push(value)
            } else {
                newAddGoals.push(addGoals[i])
            }
        }
        setAddGoals(newAddGoals)
    }
    return (
        isModalOpen ? (
            <div className='add-goal-modal'>
                <div className='add-goal-modal-content'>
                    <div className='agm-header'>
                        <p>Add Goals</p>
                        <button className='add-goals-button' onClick={toggleModalOpen}>&times;</button>
                    </div>
                    <div className='agm-body'>
                        {Days.map((day, i) => {
                            return (
                                <div className='agm-day' key={day}>
                                    <p style={{ fontWeight: 'bold' }}>{day}</p>
                                    <div className='agm-add-goal-wrapper'>
                                        <input
                                            onChange={e => handleChange(e.target.value, i)}
                                            className='agm-add-goal'
                                            maxLength="10"
                                            value={addGoals[i]}
                                        />
                                        <button className='add-goal-button'
                                            onClick={() => handleSubmit(addGoals[i], i)}
                                        >+</button>
                                    </div>
                                    <div className='agm-goals-list'>
                                        {goals[i].map((goal, j) => {
                                            return (
                                                goal != '' ?
                                                <div key={goal} className='agm-goal-wrapper'>
                                                    <p className='agm-goal'>
                                                        {goal}
                                                    </p>
                                                    <button className='delete-goal' onClick={() => deleteGoal(i,j)}>x</button>
                                                </div>
                                                    :
                                                <div key={goal}></div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        ) : (
            <></>
        )
    )
}