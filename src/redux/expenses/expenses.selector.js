import { createSelector } from 'reselect'

const selectExpensesState = state => state.expenses

export const selectExpenses = createSelector(
	[selectExpensesState],
	expenses => expenses.byId
)
