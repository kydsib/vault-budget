import BudgetActionTypes from './budget.types'

import { addIncome, deleteEntry, editEntryValue } from './budget.ustils'

const INITIAL_STATE = {
	expenses: {
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
	},
	income: {
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
	},
	monthlyExpenses: 0,
	monthlyBudget: 1000,
	hoursWorked: 100,
	monthlyIncome: 1000
}

const budgetReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BudgetActionTypes.ADD_INCOME:
			return addIncome(state, action)
		case BudgetActionTypes.ADD_EXPENSE:
			const newExpenses =
				state.monthlyExpenses - parseInt(action.payload.amount)
			const newTotalBudget = state.monthlyIncome + newExpenses
			const expId = action.payload.id
			const expenseValue = action.payload.amount
			const newTimeSpent = (
				(expenseValue * state.hoursWorked) /
				state.monthlyIncome
			).toFixed(1)

			return {
				...state,
				expenses: {
					...state.expenses,
					byId: {
						...state.expenses.byId,
						[expId]: {
							...action.payload,
							timeSpent: newTimeSpent
						}
					},
					allIds: state.expenses.allIds.concat(expId)
				},
				monthlyExpenses: newExpenses,
				monthlyBudget: newTotalBudget
			}
		case BudgetActionTypes.DELETE_EXPENSE:
			// palikti tik delete entry?
			return deleteEntry(state, action)
		case BudgetActionTypes.DELETE_INCOME:
			return deleteEntry(state, action)
		case BudgetActionTypes.EDIT_ENTRY_VALUE:
			return editEntryValue(state, action)
		default:
			return state
	}
}

export default budgetReducer
