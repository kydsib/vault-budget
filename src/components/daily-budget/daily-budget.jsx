import React from 'react'

const DailyBudget = ({ date }) => {
	return (
		<tbody className="container-for-day">
			<tr>
				<th className="date-box">{date}</th>
			</tr>
		</tbody>
	)
}

export default DailyBudget
