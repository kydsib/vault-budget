import BudgetActionTypes from './budget.types'

export const addToBudget = entry => ({
	type: BudgetActionTypes.BUDGET_ADD_INCOME,
	payload: entry
})

export const subtrFromBudget = entry => ({
	type: BudgetActionTypes.BUDGET_ADD_EXPENSE,
	payload: entry
})

export const deleteIncFromBudget = item => ({
	type: BudgetActionTypes.BUDGET_DELETE_INCOME,
	payload: item
})

export const deleteExpFromBudget = item => ({
	type: BudgetActionTypes.BUDGET_DELETE_EXPENSE,
	payload: item
})

export const incEditChangesBudget = entry => ({
	type: BudgetActionTypes.BUDGET_EDIT_ON_INC,
	payload: entry
})

export const expEditChangesBudget = entry => ({
	type: BudgetActionTypes.BUDGET_EDIT_ON_EXP,
	payload: entry
})
