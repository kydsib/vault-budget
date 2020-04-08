import React from 'react'

import BudgetInput from '../../components/budget-input/budget-input'
import IncomeAndExpenseLog from '../../components/inc-exp-log/inc-exp-log'

const BudgetPage = () => {
	return (
		<div className="budgetPage-container">
			<BudgetInput />
			<IncomeAndExpenseLog />
		</div>
	)
}

export default BudgetPage
