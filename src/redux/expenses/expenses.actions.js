import ExpensesActionTypes from './expenses.types'

export const addExpense = entry => ({
	type: ExpensesActionTypes.ADD_EXPENSE,
	payload: entry
})

export const deleteExpense = id => ({
	type: ExpensesActionTypes.DELETE_EXPENSE,
	payload: id
})

export const editExpEntry = entry => ({
	type: ExpensesActionTypes.EDIT_ENTRY_VALUE,
	payload: entry
})
