import IncomeActionTypes from './income.types'

export const addIncome = entry => ({
	type: IncomeActionTypes.ADD_INCOME,
	payload: entry
})

export const deleteIncome = id => ({
	type: IncomeActionTypes.DELETE_INCOME,
	payload: id
})

export const editIncEntry = entry => ({
	type: IncomeActionTypes.EDIT_INCOME_VALUE,
	payload: entry
})

// export const incEditAdjustBudget = () => {
// 	return (dispatch, getState) => {
// 		const state = getState()
// 	}
// }
