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
			...newState
		},
		allIds: newAllIds
	}
}

export const addExpense = (state, action) => {
	const incId = action.payload.id

	return {
		...state,
		byId: {
			...state.byId,
			[incId]: { ...action.payload }
		},
		allIds: state.allIds.concat(incId)
	}
}
