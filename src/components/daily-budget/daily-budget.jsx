import React from 'react'

import './daily-budget.scyles.scss'

const DailyBudget = ({ date }) => {
	return (
		<tr className="container-for-day">
			<th></th>
			<th className="date-box">{date}</th>
			<th></th>
		</tr>
	)
}

export default DailyBudget
