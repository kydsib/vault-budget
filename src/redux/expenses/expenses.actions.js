import ExpensesActionTypes from './expenses.types'
import {
	selectMonthlyIncome,
	selectMonthlyHours
} from '../budget/budget.selector'

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

export const recalcExpTimeSpent = () => {
	return (dispatch, getState) => {
		const state = getState()

		const monthlyIncome = selectMonthlyIncome(state)
		const monthlyHours = selectMonthlyHours(state)
		dispatch({
			type: ExpensesActionTypes.RECALCULATE_TIME_SPENT,
			payload: {
				hoursWorked: monthlyHours,
				income: monthlyIncome
			}
		})
	}
}
