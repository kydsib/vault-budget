import { createSelector } from 'reselect'

const selectExpensesState = state => state.budget.expenses
const selectIncomeState = state => state.budget.income

export const selectIncome = createSelector(
	[selectIncomeState],
	income => income
)

export const selectExpenses = createSelector(
	[selectExpensesState],
	expenses => expenses
)
