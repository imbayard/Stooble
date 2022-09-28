import React, { useState } from 'react';

// Components
import DayOutline from './DayOutline';

// Styling
import './WeekOutline.css';

export default function WeekOutline() {
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	return (
		<div className='week-outline'>
			<span className='week-outline-header'>
				<h3>Your Week</h3>
				<button>Add Goals</button>
			</span>
			<span className='week-day-wrapper'>
				{days.map(day => {
					return (
						<DayOutline
							dayName={day}
						/>
					)
				})}
			</span>
		</div>
	)
}