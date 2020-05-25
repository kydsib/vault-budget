import { combineReducers } from 'redux'

import budgetReducer from './budget/budget.reducer'
import expensesReducer from './expenses/expenses.reducer'
import incomeReducer from './income/income.reducer'

export default combineReducers({
	budget: budgetReducer,
	expenses: expensesReducer,
	income: incomeReducer
})
