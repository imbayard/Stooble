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
                                    <p style={{fontWeight: 'bold'}}>{day}</p>
                                    <div className='agm-goals-list'>
                                        {goals[i].map((goal, j) => {
                                            return (
                                                goal != '' ?
                                                <div key={goal} className='agm-goal-wrapper'>
                                                    <p className='agm-goal'>
                                                        {goal}
                                                    </p>
                                                    <button className='delete-goal' onClick={(e) => deleteGoal(i,j)}>x</button>
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