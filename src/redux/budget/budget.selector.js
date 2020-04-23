import { createSelector } from 'reselect'
import { getDefaultWatermarks } from 'istanbul-lib-report'

// prastas selectorius, nes budget keiciasi su income and expense
const selectBudget = state => state.budget

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

// export const getExpensesInHoursWorked = createSelector(
// 	[selectExpenses, timeSpent, seletctMonthlyIncome],
// 	(expenses, time, monthlyIncome) =>
// 		Object.values(expenses).map(
// 			expens =>
// 				(expens.timeSpent =
// 					(parseInt(expens.amount, 10) * time) / monthlyIncome)
// 		)
// )
