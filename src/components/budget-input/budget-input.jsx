import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import BudgetCategories from '../budget-categories/budget-categories'
import CustomButton from '../custom-button/custom-button'
import CustomInput from '../custom-input/custom-input'

import { addIncome, addExpense } from '../../redux/budget/budget.actions'

import './budget-input.scss'

const BudgetInput = () => {
	const [inputValues, setInputValues] = useState({
		id: '',
		category: 'food',
		description: '',
		amount: '',
		timeSpent: ''
	})

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
						? dispatch(addExpense(inputValues))
						: dispatch(addIncome(inputValues))
				}}
				type="submit"
			>
				Submit
			</CustomButton>
		</form>
	)
}

export default BudgetInput
