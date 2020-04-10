import { createSelector } from 'reselect'

const selectBudget = state => state.budget

export const selectIncome = createSelector(
	[selectBudget],
	budget => budget.income
)

export const selectExpenses = createSelector(
	[selectBudget],
	budget => budget.expenses
)
