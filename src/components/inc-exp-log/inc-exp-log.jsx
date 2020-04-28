import React from 'react'
import { useSelector } from 'react-redux'

import {
	selectIncome,
	selectExpenses
} from '../../redux/budget/budget.selector'
import TableHeader from '../incExp-table-header/incExp-table-header'

import SingleItem from '../single-item/single-itmem'
import DailyBudgetTableHeader from '../inc-exp-tableHead/daily-budget-table-header'

import './inc-exp-log.scss'

const IncomeAndExpenseLog = () => {
	// taking values from expenses.byId, renaming byId to expId
	const { byId: expId } = useSelector(state => selectExpenses(state))

	const { byId: incId } = useSelector(state => selectIncome(state))

	const combinedData = { ...expId, ...incId }

	const finalDtata = Object.values(combinedData)

	return (
		<table className="output-table">
			<TableHeader />
			<DailyBudgetTableHeader />
			<tbody className="data-log">
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
			</tbody>
		</table>
	)
}

export default IncomeAndExpenseLog
