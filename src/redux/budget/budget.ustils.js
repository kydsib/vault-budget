export const editEntryValue = (state, action) => {
	const itemDataUpadate = action.payload
	const itemId = action.payload.id

	if (state.expenses.byId[itemId]) {
		const newTimeSpent =
			(state.hoursWorked * Number(itemDataUpadate.amount)) /
			state.monthlyIncome
		itemDataUpadate.timeSpent = newTimeSpent
		const itemToUpdate = state.expenses.byId[itemId]
		const updatedItem = { ...itemToUpdate, ...itemDataUpadate }

		const expDiff =
			Number(state.expenses.byId[itemId].amount) -
			Number(itemDataUpadate.amount)
		const newMontlyExp = state.monthlyExpenses + expDiff
		const newMonthlyBudget = state.monthlyBudget + expDiff
		return {
			...state,
			expenses: {
				...state.expenses,
				byId: {
					...state.expenses.byId,
					[itemId]: updatedItem
				}
			},
			monthlyExpenses: newMontlyExp,
			monthlyBudget: newMonthlyBudget
		}
	} else {
		const itemToUpdate = state.income.byId[itemId]
		const updatedItem = { ...itemToUpdate, ...itemDataUpadate }

		const incDiff =
			Number(state.income.byId[itemId].amount) -
			Number(itemDataUpadate.amount)
		const newMonthlyBudget = state.monthlyBudget - incDiff
		const timeSpentDiff =
			Number(state.income.byId[itemId].timeSpent) -
			Number(itemDataUpadate.timeSpent)
		const newHoursWorked = state.hoursWorked - timeSpentDiff
		const newMonthlyIncome = state.monthlyIncome - incDiff

		return {
			...state,
			income: {
				...state.income,
				byId: {
					...state.income.byId,
					[itemId]: updatedItem
				}
			},

			monthlyBudget: newMonthlyBudget,
			hoursWorked: newHoursWorked,
			monthlyIncome: newMonthlyIncome
		}
	}
}

export const deleteEntry = (state, action) => {
	const itemToDelete = action.payload

	if (state.expenses.byId[action.payload]) {
		const newState = { ...state.expenses.byId }
		const entryValue = newState[action.payload].amount

		const newMonthlyExp = state.monthlyExpenses + Number(entryValue)
		const newMonthlyBudget = state.monthlyBudget + Number(entryValue)
		delete newState[itemToDelete]
		const newAllIds = state.income.allIds.filter(
			item => item !== itemToDelete
		)

		return {
			...state,
			expenses: {
				...state.expenses,
				byId: {
					...newState
				},
				allIds: newAllIds
			},
			monthlyExpenses: newMonthlyExp,
			monthlyBudget: newMonthlyBudget
		}
	} else {
		const newState = { ...state.income.byId }
		const entryValue = newState[action.payload].amount
		const newMonthlyBudget = state.monthlyBudget - Number(entryValue)
		const newMonthlyIncome = state.monthlyIncome - Number(entryValue)

		delete newState[itemToDelete]
		const newAllIds = state.income.allIds.filter(
			item => item !== itemToDelete
		)

		return {
			...state,
			income: {
				...state.income,
				byId: {
					...newState
				},
				allIds: newAllIds
			},
			monthlyBudget: newMonthlyBudget,
			monthlyIncome: newMonthlyIncome
		}
	}
}

export const addIncome = (state, action) => {
	const newHoursWorked =
		state.hoursWorked + parseInt(action.payload.timeSpent)

	const newMonthlyIncome =
		state.monthlyIncome + parseInt(action.payload.amount)
	const incId = action.payload.id

	const newMonthlyBudget = newMonthlyIncome + state.monthlyExpenses

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
						(state.monthlyIncome + Number(action.payload.amount))
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
		monthlyIncome: newMonthlyIncome
	}
}
