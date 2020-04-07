import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid'

import BudgetCategories from '../budget-categories/budget-categories'
import CustomButton from '../custom-button/custom-button'
import CustomInput from '../custom-input/custom-input'

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

		setInputValues({
			...inputValues,
			[name]: value,
			id: uniqid()
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
			timeSpent: ''
		})
	}

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
				type="text"
				placeholder="Amount in €"
				name="amount"
				className="input-item"
			/>
			{inputValues.category === 'income' ? (
				<CustomInput
					handleChange={handleChange}
					value={inputValues.timeSpent}
					type="number"
					placeholder="Hours spent"
					name="timeSpent"
					className="input-item"
				/>
			) : null}

			<CustomButton value="Submit" type="submit" />
		</form>
	)
}

export default BudgetInput
