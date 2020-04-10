import React from 'react'
import { useSelector } from 'react-redux'

import {
	selectIncome,
	selectExpenses
} from '../../redux/budget/budget.selector'

import SingleItem from '../single-item/single-itmem'

const IncomeAndExpenseLog = () => {
	// taking values from expenses.byId, renaming byId to expId
	const { byId: expId } = useSelector(state => selectExpenses(state))
	const { byId: incId } = useSelector(state => selectIncome(state))

	const combinedData = { ...expId, ...incId }
	// making array of final values
	const finalDtata = Object.values(combinedData)

	return (
		<div className="log-container">
			<ul className="log-container__header"></ul>
			<div className="data-log">
				{finalDtata.map(item => (
					<SingleItem
						key={item.id}
						id={item.id}
						category={item.category}
						description={item.description}
						amount={item.amount}
						timeSpent={item.timeSpent}
					/>
				))}
			</div>
		</div>
	)
}

export default IncomeAndExpenseLog
