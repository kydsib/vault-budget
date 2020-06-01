import BudgetActionTypes from './budget.types'

const INITIAL_STATE = {
	monthlyExpenses: 0,
	monthlyBudget: 1000,
	hoursWorked: 100,
	monthlyIncome: 1000
}

const budgetReducer = (state = INITIAL_STATE, action) => {
	// gal geriau issikelti viska i utils ir ten paprastai perpanaudoti logika, kuri cia daugumoje kartojaasi

	switch (action.type) {
		case BudgetActionTypes.BUDGET_ADD_INCOME:
			const newMonthlyIncome =
				state.monthlyIncome + Number(action.payload.amount)
			const newHoursWorked =
				state.hoursWorked + Number(action.payload.timeSpent)
			const newMonthlyBudget =
				state.monthlyBudget + Number(action.payload.amount)
			return {
				...state,
				monthlyBudget: newMonthlyBudget,
				hoursWorked: newHoursWorked,
				monthlyIncome: newMonthlyIncome
			}
		case BudgetActionTypes.BUDGET_ADD_EXPENSE:
			const newMonthlyExpenses =
				state.monthlyExpenses + Number(action.payload.amount)
			const newBudget =
				state.monthlyBudget - Number(action.payload.amount)
			return {
				...state,
				monthlyExpenses: newMonthlyExpenses,
				monthlyBudget: newBudget
			}
		case BudgetActionTypes.BUDGET_DELETE_EXPENSE:
			const expData =
				state.monthlyExpenses - Number(action.payload.amount)
			const budgetData =
				state.monthlyBudget + Number(action.payload.amount)
			return {
				...state,
				monthlyBudget: budgetData,
				monthlyExpenses: expData
			}
		case BudgetActionTypes.BUDGET_DELETE_INCOME:
			const incData = state.monthlyIncome - Number(action.payload.amount)
			const newBudgetData =
				state.monthlyBudget - Number(action.payload.amount)
			const newHours =
				state.hoursWorked - Number(action.payload.timeSpent)

			return {
				...state,
				monthlyBudget: newBudgetData,
				hoursWorked: newHours,
				monthlyIncome: incData
			}
		case BudgetActionTypes.BUDGET_EDIT_ON_INC:
			const budgetAfterIncEdit =
				state.monthlyBudget + action.payload.amountDifference
			const incAfterIncEdit =
				state.monthlyIncome + action.payload.amountDifference
			const hoursWorkedAfterIncEdit =
				state.hoursWorked + action.payload.timeSpentDiff
			return {
				...state,
				monthlyBudget: budgetAfterIncEdit,
				hoursWorked: hoursWorkedAfterIncEdit,
				monthlyIncome: incAfterIncEdit
			}
		case BudgetActionTypes.BUDGET_EDIT_ON_EXP:
			const budgetAfterExpEdit =
				state.monthlyBudget + action.payload.amountDifference
			const hoursWorkedAfterExpEdit =
				state.hoursWorked + action.payload.timeSpentDiff
			const expAfterExpEdit =
				state.monthlyExpenses - action.payload.amountDifference
			return {
				...state,
				monthlyBudget: budgetAfterExpEdit,
				hoursWorked: hoursWorkedAfterExpEdit,
				monthlyExpenses: expAfterExpEdit
			}
		default:
			return state
	}
}

export default budgetReducer
