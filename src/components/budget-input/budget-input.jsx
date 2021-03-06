import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'

import BudgetCategories from '../budget-categories/budget-categories'
import CustomButton from '../custom-button/custom-button'
import CustomInput from '../custom-input/custom-input'

import {
	addExpense,
	recalcExpTimeSpent,
	recalMothlyCategoryBudget
} from '../../redux/expenses/expenses.actions'
import { addIncome } from '../../redux/income/income.actions'
import { addToBudget, subtrFromBudget } from '../../redux/budget/budget.actions'

import './budget-input.scss'

const BudgetInput = () => {
	const [inputValues, setInputValues] = useState({
		id: '',
		category: 'food',
		description: '',
		amount: '',
		timeSpent: ''
	})
	// for timeSpent in expenses calculation
	const getMonthlyIncome = useSelector(state => state.budget.monthlyIncome)

	const handleChange = e => {
		e.preventDefault()
		const { value, name } = e.target

		const currentDate = new Date()
			.toISOString()
			.substr(0, 19)
			.replace('T', ' ')

		// automaticly calculating timeSpent for expenses depending on monthly income
		if (name === 'amount' && inputValues.category !== 'income') {
			const hoursSpent = ((value * 100) / getMonthlyIncome).toFixed(1)
			setInputValues({
				...inputValues,
				[name]: value,
				id: uniqid(),
				time: currentDate,
				timeSpent: hoursSpent
			})
		} else {
			setInputValues({
				...inputValues,
				[name]: value,
				id: uniqid(),
				time: currentDate
			})
		}
	}

	const handleSubmit = e => {
		e.preventDefault()

		setInputValues({
			...inputValues,
			id: '',
			category: 'food',
			description: '',
			amount: '',
			timeSpent: '',
			time: ''
		})
	}
	const { amount, timeSpent } = inputValues

	const combinedActions = inputValues => {
		return dispatch => {
			dispatch(addIncome(inputValues))
			dispatch(addToBudget(inputValues))
			dispatch(recalcExpTimeSpent())
		}
	}

	const combinedExpAction = inputValues => {
		return dispatch => {
			dispatch(addExpense(inputValues))
			dispatch(subtrFromBudget(inputValues))
			dispatch(recalMothlyCategoryBudget(inputValues))
		}
	}

	//Disable submit if not all values are entered
	let isEnabled

	if (inputValues.category !== 'income') {
		isEnabled = amount.length > 0
	} else if (inputValues.category === 'income') {
		isEnabled = amount.length > 0 && timeSpent.length > 0
	}
	const dispatch = useDispatch()

	return (
		<form className="input-container" onSubmit={handleSubmit}>
			{/* is it better to add class manualy or pass it w/ props? */}
			<BudgetCategories
				name="category"
				value={inputValues.category}
				handleChange={handleChange}
			/>
			<CustomInput
				handleChange={handleChange}
				value={inputValues.description}
				type="text"
				name="description"
				placeholder="Description"
				className="input-item"
			/>
			<CustomInput
				handleChange={handleChange}
				value={inputValues.amount}
				type="number"
				placeholder="Amount in €"
				name="amount"
				className="input-item"
				requidred="required"
			/>
			{inputValues.category === 'income' ? (
				<CustomInput
					handleChange={handleChange}
					value={inputValues.timeSpent}
					type="number"
					placeholder="Hours spent"
					name="timeSpent"
					className="input-item"
					required
				/>
			) : null}

			<CustomButton
				disabled={!isEnabled}
				onClick={() => {
					inputValues.category !== 'income'
						? dispatch(combinedExpAction(inputValues))
						: dispatch(combinedActions(inputValues))
				}}
				type="submit"
			>
				Submit
			</CustomButton>
		</form>
	)
}

export default BudgetInput
