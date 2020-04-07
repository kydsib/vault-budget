import BudgetActionTypes from './budget.types'

export const addIncome = entry => ({
	type: BudgetActionTypes.ADD_INCOME,
	payload: entry
})
