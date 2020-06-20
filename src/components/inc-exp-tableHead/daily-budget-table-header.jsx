import React from 'react'

import './daily-budget-table-header.scss'

const DailyBudgetTableHeader = () => {
	return (
		<thead>
			<tr className="header">
				<td className="header__item">Category</td>
				<td className="header__item description">Description</td>
				<td className="header__item">Amount - &euro;/hrs</td>
			</tr>
		</thead>
	)
}

export default DailyBudgetTableHeader
