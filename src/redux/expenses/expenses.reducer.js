import ExpensesActionTypes from './expenses.types'

import {
	editEntryValue,
	deleteExpense,
	addExpense,
	changeTimeSpent
} from './expenses.utils'

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
	allIds: ['k948zpnp', 'z9e8ipnp', 'k948zcvc', 'k948zp32'],
	expBudget: {
		totalSetBudget: 500, // this comes from all set budgets
		curentExp: 340 // this comes from exp
	},
	budgetByCategory: {
		food: {
			id: 'food',
			categoryBudget: 175, // set
			categoryExpenses: 32 // calc
		}
	}
}

const expensesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ExpensesActionTypes.ADD_EXPENSE:
			return addExpense(state, action)
		case ExpensesActionTypes.DELETE_EXPENSE:
			return deleteExpense(state, action)
		case ExpensesActionTypes.EDIT_ENTRY_VALUE:
			return editEntryValue(state, action)
		case ExpensesActionTypes.RECALCULATE_TIME_SPENT:
			return changeTimeSpent(state, action)
		case ExpensesActionTypes.SET_CATEGORY_BUDGET:
			const budgetId = action.payload.id
			console.log(budgetId)

			// need to filter expState for expenses in this category
			const expensesByCategory = Object.values(state.byId).filter(
				item => item.category === budgetId
			)
			const expensesInCategory = expensesByCategory.reduce(
				(acc, curr) => acc + Number(curr.amount),
				0
			)

			if (!state.budgetByCategory[budgetId]) {
				return {
					...state,
					expBudget: {
						...state.expBudget,
						totalSetBudget:
							state.expBudget.totalSetBudget +
							Number(action.payload.categoryBudget)
					},
					budgetByCategory: {
						...state.budgetByCategory,
						[budgetId]: {
							...state.budgetByCategory.budgetId,
							...action.payload,
							categoryExpenses: expensesInCategory
						}
					}
				}
			} else {
				return state
			}
		case ExpensesActionTypes.UPDATE_MOTHNY_CATEGORY_BUDGET:
			const categoryToUpdate = action.payload.category

			Object.values(state.budgetByCategory).forEach(item => {
				if (item.id === categoryToUpdate) {
					console.log('y')
					console.log(state.budgetByCategory[categoryToUpdate])
				} else {
					console.log('n')
				}
			})
			return {
				...state
			}
		// Object.values(state.budgetByCategory).forEach(item => {
		// 	if (item.id === categoryToUpdate) {
		// 		console.log(categoryToUpdate)
		// 		// console.log(action.payload.amount)
		// 		const newExpenses =
		// 			state.budgetByCategory[categoryToUpdate]
		// 				.categoryExpenses + Number(action.payload.amount)
		// 		// const newTotalExp =
		// 		// 	state.expBudget.curentExp +
		// 		// 	Number(action.payload.amount)
		// 		console.log(state)
		// 		// console.log(state.budgetByCategory[categoryToUpdate])
		// 		console.log(state.budgetByCategory.categoryToUpdate) // kodel sitas logina undefined?
		// 		console.log(
		// 			state.budgetByCategory.categoryToUpdate.categoryExpenses
		// 		)
		// 		// console.log(state.budgetByCategory[categoryToUpdate])
		// 		console.log(newExpenses)
		// 		// cia logina viska gerai, kodel negaunu reikiamo value?
		// 		return {
		// 			...state,
		// 			// expBudget: {
		// 			// 	...state.expBudget,
		// 			// 	curentExp:
		// 			// 		state.budgetByCategory[categoryToUpdate]
		// 			// 			.categoryExpenses +
		// 			// 		Number(action.payload.amount)
		// 			// }
		// 			budgetByCategory: {
		// 				...state.budgetByCategory,
		// 				[categoryToUpdate]: {
		// 					...state.budgetByCategory[categoryToUpdate],
		// 					categoryExpenses:
		// 						state.budgetByCategory[categoryToUpdate]
		// 							.categoryExpenses + 20
		// 				}
		// 			}
		// 		}
		// 	} else {
		// 		return {
		// 			...state
		// 		}
		// 	}
		// })

		default:
			return state
	}
}

export default expensesReducer
