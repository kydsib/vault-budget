import React from 'react'
import { useSelector } from 'react-redux'

import './incExp-table.scss'

const TableHeader = () => {
	const income = useSelector(state => state.budget.monthlyIncome)
	const expenses = useSelector(state => state.budget.monthlyExpenses)
	const totalBudget = useSelector(state => state.budget.monthlyBudget)

	return (
		<thead className="table-container">
			<tr className="table-header">
				<th className="table-header__item">Income</th>
				<th className="table-header__item">Expenses</th>
				<th className="table-header__item">Total</th>
			</tr>
			<tr>
				<th className="value green">{income}</th>
				<th className="value red">{expenses}</th>
				<th>{totalBudget}</th>
			</tr>
		</thead>
	)
}

export default TableHeader
