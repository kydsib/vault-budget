import React from 'react'
import { useSelector } from 'react-redux'

import {
	selectIncome,
	selectExpenses
} from '../../redux/budget/budget.selector'
import TableHeader from '../incExp-table-header/incExp-table-header'

import SingleItem from '../single-item/single-itmem'
import DailyBudgetTableHeader from '../inc-exp-tableHead/daily-budget-table-header'
import DailyBudget from '../daily-budget/daily-budget'

import './inc-exp-log.scss'

const IncomeAndExpenseLog = () => {
	// taking values from expenses.byId, renaming byId to expId
	const { byId: expId } = useSelector(state => selectExpenses(state))

	const { byId: incId } = useSelector(state => selectIncome(state))

	const combinedData = { ...expId, ...incId }

	const finalDtata = Object.values(combinedData)

	// grouping values by date {date: [{values}], date2: [{values}]}
	function doTheFiltering(objectArray, property) {
		return objectArray.reduce(function(acc, obj) {
			let key = obj[property].substring(0, 10)
			if (!acc[key]) {
				acc[key] = []
			}
			acc[key].push(obj)
			return acc
		}, {})
	}

	let budgetByday = doTheFiltering(finalDtata, 'time')
	// Sorting by date
	let sortedByDay = {}
	Object.keys(budgetByday)
		.sort()
		.forEach(key => {
			sortedByDay[key] = budgetByday[key]
		})

	return (
		<table className="output-table">
			<TableHeader />
			<DailyBudgetTableHeader />
			<tbody className="data-log">
				{Object.entries(sortedByDay).map(([date, items], key) => [
					<DailyBudget date={date} key={key} />,
					...items.map(({ id, ...rest }) => (
						<SingleItem key={id} {...rest} />
					))
				])}
			</tbody>
		</table>
	)
}

export default IncomeAndExpenseLog
