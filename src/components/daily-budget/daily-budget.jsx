import React from 'react'

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
