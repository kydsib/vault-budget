import BudgetActionTypes from './budget.types'

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
		// Should I move part of the logic outside the reducer?
		case BudgetActionTypes.ADD_INCOME:
			const newHoursWorked =
				state.hoursWorked + parseInt(action.payload.timeSpent)

			const newMontlyIncome =
				state.monthlyIncome + parseInt(action.payload.amount)
			const incId = action.payload.id

			const newMonthlyBudget = newMontlyIncome + state.monthlyExpenses

			const copyOfExpenses = {
				...state,
				expenses: {
					...state.expenses,
					byId: {
						...state.expenses.byId
					}
				}
			}

			let newData

			const updateTimeSpentForExpenses = state => {
				let byId = { ...state.expenses.byId }
				const newObjs = Object.entries(byId).map(([key, value]) => {
					return {
						[key]: {
							...value,
							timeSpent: (
								(value.amount *
									(state.hoursWorked +
										Number(action.payload.timeSpent))) /
								(state.monthlyIncome +
									Number(action.payload.amount))
							).toFixed(1)
						}
					}
				})

				for (let newObj of newObjs) {
					Object.assign(byId, newObj)
				}

				return (newData = byId)
			}
			updateTimeSpentForExpenses(copyOfExpenses)
			return {
				...state,
				income: {
					...state.income,
					byId: {
						...state.income.byId,
						[incId]: { ...action.payload }
					},
					allIds: state.income.allIds.concat(incId)
				},
				expenses: {
					...state.expenses,
					byId: {
						...state.expenses.byId,
						...newData
					}
				},
				monthlyBudget: newMonthlyBudget,
				hoursWorked: newHoursWorked,
				monthlyIncome: newMontlyIncome
			}
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
		default:
			return state
	}
}

export default budgetReducer
