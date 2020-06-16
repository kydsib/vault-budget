export const editEntryValue = (state, action) => {
	const itemId = action.payload.id
	const itemToUpdate = state.byId[itemId]
	const updatedItem = { ...itemToUpdate, ...action.payload }

	return {
		...state,
		byId: {
			...state.byId,
			[itemId]: updatedItem
		}
	}
}

export const deleteExpense = (state, action) => {
	const itemToDelete = action.payload
	const newState = { ...state.byId }

	delete newState[itemToDelete]
	const newAllIds = state.allIds.filter(item => item !== itemToDelete)

	return {
		...state,
		byId: {
			// is this ok?
			...newState
		},
		allIds: newAllIds
	}
}

export const addExpense = (state, action) => {
	const incId = action.payload.id
	console.log(action)

	return {
		...state,
		byId: {
			...state.byId,
			[incId]: { ...action.payload }
		},
		allIds: state.allIds.concat(incId)
	}
}

export const changeTimeSpent = (state, action) => {
	let byId = { ...state.byId }

	const newObjs = Object.entries(byId).map(([key, value]) => {
		return {
			[key]: {
				...value,
				timeSpent: (
					(Number(value.amount) *
						Number(action.payload.hoursWorked)) /
					action.payload.income
				).toFixed(1)
			}
		}
	})

	for (let newObj of newObjs) {
		Object.assign(byId, newObj)
	}
	console.log(byId)

	return {
		...state,
		byId: {
			...state.byId,
			...byId
		}
	}
}

export const updateMonthlyCategoryBudget = (state, action) => {
	const categoryToUpdate = action.payload.category
}
