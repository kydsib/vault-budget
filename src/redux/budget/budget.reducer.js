import BudgetActionTypes from './budget.types'

const INITIAL_STATE = {
	expense: {
		byId: {},
		allIds: []
	},
	income: {
		byId: {},
		allIds: []
	}
}

const budgetReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BudgetActionTypes.ADD_INCOME:
			return {}
		default:
			return state
	}
}

export default budgetReducer
