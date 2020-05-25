import ExpensesActionTypes from './expenses.types'

import { editEntryValue, deleteExpense, addExpense } from './expenses.utils'

const INITIAL_STATE = {
	byId: {
		k948zpnp: {
			id: 'k948zpnp',
			category: 'other',
			description: 'book',
			amount: '25',
			timeSpent: '2.5',
			time: '2020-04-21'
		},
		z9e8ipnp: {
			id: 'z9e8ipnp',
			category: 'food',
			description: 'pasta',
			amount: '12',
			timeSpent: '1.2',
			time: '2020-04-21'
		},
		k948zcvc: {
			id: 'k948zcvc',
			category: 'other',
			description: 'book',
			amount: '25',
			timeSpent: '2.5',
			time: '2020-04-11'
		},
		k948zp32: {
			id: 'k948zp32',
			category: 'other',
			description: 'book',
			amount: '25',
			timeSpent: '2.5',
			time: '2020-04-11'
		}
	},
	allIds: ['k948zpnp', 'z9e8ipnp', 'k948zcvc', 'k948zp32']
}

const expensesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ExpensesActionTypes.ADD_EXPENSE:
			return addExpense(state, action)
		case ExpensesActionTypes.DELETE_EXPENSE:
			return deleteExpense(state, action)
		case ExpensesActionTypes.EDIT_ENTRY_VALUE:
			return editEntryValue(state, action)
		default:
			return state
	}
}

export default expensesReducer