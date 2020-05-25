import IncomeActionTypes from './income.types'

import { editIncValue, addIncome, deleteIncome } from './income.utisls'

const INITIAL_STATE = {
	byId: {
		k948lid3: {
			id: 'k948lid3',
			category: 'income',
			description: 'book',
			amount: '225',
			timeSpent: '15',
			time: '2020-04-20'
		},
		k948ze5h: {
			id: 'k948ze5h',
			category: 'income',
			description: 'lala',
			amount: '75',
			timeSpent: '5',
			time: '2020-04-11'
		},
		k94wd332: {
			id: 'k94wd332',
			category: 'income',
			description: 'book',
			amount: '250',
			timeSpent: '12.5',
			time: '2020-04-11'
		}
	},
	allIds: ['k948lid3', 'k948ze5h', 'k94wd332']
}

const incomeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case IncomeActionTypes.ADD_INCOME:
			return addIncome(state, action)
		case IncomeActionTypes.DELETE_INCOME:
			return deleteIncome(state, action)
		case IncomeActionTypes.EDIT_INCOME_VALUE:
			return editIncValue(state, action)
		default:
			return state
	}
}

export default incomeReducer
