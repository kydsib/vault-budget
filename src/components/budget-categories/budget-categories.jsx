import React from 'react'

import './budget-categories.styles.scss'

const BudgetCategories = ({ handleChange, name, value }) => {
	return (
		<div className="options-container">
			<select
				value={value}
				name={name}
				className="options"
				onChange={handleChange}
			>
				<option value="income">Income</option>
				<option value="food">Food</option>
				<option value="housing">Housing</option>
				<option value="transportation">Transportation</option>
				<option value="shopping">Shopping</option>
				<option value="entertainment">Entertainment</option>
				<option value="bills">Bills</option>
				<option value="loans">Loans</option>
				<option value="savings">Savings</option>
				<option value="other">Other</option>
				{/* later add ability to add permament option? */}
			</select>
		</div>
	)
}

export default BudgetCategories
