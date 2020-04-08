import BudgetActionTypes from './budget.types'

const INITIAL_STATE = {
	expenses: {
		byId: {},
		allIds: []
	},
	income: {
		byId: {},
		allIds: []
	},
	totalBudget: ''
}

const budgetReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BudgetActionTypes.ADD_INCOME:
			const incId = action.payload.id
			return {
				...state,
				income: {
					...state.income,
					byId: {
						...state.income.byId,
						[incId]: { ...action.payload }
					},
					allIds: state.income.allIds.concat(incId)
				}
			}
		case BudgetActionTypes.ADD_EXPENSE:
			const expId = action.payload.id
			return {
				...state,
				expenses: {
					...state.expenses,
					byId: {
						...state.expenses.byId,
						[expId]: { ...action.payload }
					},
					allIds: state.expenses.allIds.concat(expId)
				}
			}
		default:
			return state
	}
}

export default budgetReducer
