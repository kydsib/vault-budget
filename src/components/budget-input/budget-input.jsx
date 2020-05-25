import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'

import BudgetCategories from '../budget-categories/budget-categories'
import CustomButton from '../custom-button/custom-button'
import CustomInput from '../custom-input/custom-input'

import { addExpense } from '../../redux/expenses/expenses.actions'
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

		setInputValues({
			...inputValues,
			[name]: value,
			id: uniqid(),
			time: currentDate
		})
	}

	useEffect(() => {
		if (inputValues.timeSpent === '') {
			console.log('runn')
			const timeSpentVal = (inputValues.amount * 100) / getMonthlyIncome
			setInputValues({
				...inputValues,
				timeSpent: timeSpentVal
			})
		}
	})

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
				className="input-item flex-3"
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
						? dispatch(
								addExpense(inputValues),
								dispatch(subtrFromBudget(inputValues))
						  )
						: dispatch(
								addIncome(inputValues),
								dispatch(addToBudget(inputValues))
						  )
				}}
				type="submit"
			>
				Submit
			</CustomButton>
		</form>
	)
}

export default BudgetInput
