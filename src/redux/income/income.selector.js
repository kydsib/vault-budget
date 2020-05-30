import { createSelector } from 'reselect'

const selectIncomeState = state => state.income

export const selectIncome = createSelector(
	[selectIncomeState],
	income => income.byId
)
