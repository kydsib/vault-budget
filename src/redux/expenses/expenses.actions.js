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

// middleware function
// https://redux.js.org/api/applymiddleware
export const recalcExpTimeSpent = () => {
	return (dispatch, getState) => {
		// need this to acces budget data
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

export const setCategoryBudget = data => ({
	type: ExpensesActionTypes.SET_CATEGORY_BUDGET,
	payload: data
})

export const recalMothlyCategoryBudget = data => ({
	type: ExpensesActionTypes.UPDATE_MOTHNY_CATEGORY_BUDGET,
	payload: data
})

export const editMonthlyCategoryBudget = amount => ({
	type: ExpensesActionTypes.UPDATE_MOTHNY_CATEGORY_BUDGET,
	payload: amount
})
