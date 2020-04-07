import { combineReducers } from 'redux'

import budgetReducer from './budget/budget.reducer'

export default combineReducers({
	budget: budgetReducer
})
