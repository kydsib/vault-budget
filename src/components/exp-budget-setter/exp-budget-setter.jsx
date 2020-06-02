import React from 'react'

import BudgetCategories from '../budget-categories/budget-categories'
import CustomInput from '../custom-input/custom-input'

const SetMonthlyExpByCategory = () => {
	return (
		<div>
			<BudgetCategories />
			<CustomInput type="number" placeholder="Enter budget amount" />
		</div>
	)
}

export default SetMonthlyExpByCategory
