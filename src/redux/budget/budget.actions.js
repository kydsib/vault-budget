import BudgetActionTypes from './budget.types'

export const addIncome = entry => ({
	type: BudgetActionTypes.ADD_INCOME,
	payload: entry
})

export const addExpense = entry => ({
	type: BudgetActionTypes.ADD_EXPENSE,
	payload: entry
})

export const deleteIncome = id => ({
	type: BudgetActionTypes.DELETE_INCOME,
	payload: id
})

export const deleteExpense = id => ({
	type: BudgetActionTypes.DELETE_EXPENSE,
	payload: id
})

export const editEntry = entry => ({
	type: BudgetActionTypes.EDIT_ENTRY_VALUE,
	payload: entry
})
