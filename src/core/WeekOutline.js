import React, { useState } from 'react';

// Components
import DayOutline from './DayOutline';
import AddGoalModal from './AddGoalModal';
import DailyCheckIn from './DailyCheckIn';

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
				<button className='add-goals-button' onClick={handleOpenAddGoals}>Add Goals</button>
				<AddGoalModal
					isModalOpen={isAddGoalsOpen}
					toggleModalOpen={handleOpenAddGoals}
					goals={goalsForDays}
					setGoals={setGoalsForDays}
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
			<DailyCheckIn
				
			/>
		</div>
	)

	function getDayIndex() {
		const d = new Date().getDay()
		// change to our indexing system (0: Monday, ... 6: Sunday)
		return d == 0 ? 6 : d-1
	}
}