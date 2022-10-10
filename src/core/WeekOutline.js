import React, { useState } from 'react';

// Components
import DayOutline from './DayOutline';
import AddGoalModal from './AddGoalModal';

// Styling
import './WeekOutline.css';

// Data
import days from '../data/days.json';

export default function WeekOutline() {
	const [goalsForDays, setGoalsForDays] = useState([['Goal', 'Other Goal'], [''], [''], [''], [''], [''], ['']]);
	const [isAddGoalsOpen, setIsAddGoalsOpen] = useState(false)
	const handleOpenAddGoals = () => {
		setIsAddGoalsOpen(!isAddGoalsOpen)
	}
	return (
		<div className='week-outline'>
			<span className='week-outline-header'>
				<h3>Your Week</h3>
				<button onClick={handleOpenAddGoals}>Add Goals</button>
				<AddGoalModal
					isModalOpen={isAddGoalsOpen}
					toggleModalOpen={handleOpenAddGoals}
				/>
			</span>
			<span className='week-day-wrapper'>
				{days.map((day, i) => {
					return (
						<DayOutline
							dayName={day}
							goals={goalsForDays[i]}
							key={day}
						/>
					)
				})}
			</span>
		</div>
	)
}