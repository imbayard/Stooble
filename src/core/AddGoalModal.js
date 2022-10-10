import React, { useState } from 'react'

// Styling
import './AddGoalModal.css'

// Data
import Days from '../data/days.json';

export default function AddGoalsModal({
    isModalOpen,
    toggleModalOpen
}) {
    return (
        isModalOpen ? (
            <div className='add-goal-modal'>
                <div className='add-goal-modal-content'>
                    <div className='agm-header'>
                        <p>Add Goals</p>
                        <button onClick={toggleModalOpen}>&times;</button>
                    </div>
                    <div className='agm-body'>
                        {Days.map(day => {
                            return (
                                <div className='agm-day' key={day}>
                                    {day}
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