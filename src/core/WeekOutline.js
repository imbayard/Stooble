import React, { useState } from 'react';

// Components
import DayOutline from './DayOutline';

// Styling
import './WeekOutline.css';

// Data
import days from '../data/days.json';

export default function WeekOutline() {
	const [goalsForDays, setGoalsForDays] = useState([['Goal', 'Other Goal'], [''], [''], [''], [''], [''], ['']]);
	return (
		<div className='week-outline'>
			<span className='week-outline-header'>
				<h3>Your Week</h3>
				<button>Add Goals</button>
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