import React from 'react'

import BudgetInput from '../../components/budget-input/budget-input'
import IncomeAndExpenseLog from '../../components/inc-exp-log/inc-exp-log'

import BudgetCharts from '../../components/budget-charts/budget-charts'

const BudgetPage = () => {
	return (
		<div className="budgetPage-container">
			<BudgetInput />
			<BudgetCharts />
			<IncomeAndExpenseLog />
		</div>
	)
}

export default BudgetPage
