import { createSelector } from 'reselect'

const selectBudget = state => state.budget

export const selectMonthlyIncome = createSelector(
	[selectBudget],
	budget => budget.monthlyIncome
)

export const selectMonthlyHours = createSelector(
	[selectBudget],
	budget => budget.hoursWorked
)
