import React, { useState } from 'react'

import CategoryItem from '../category-item/category-item'
import CustomButton from '../custom-button/custom-button'
import SetMonthlyExpByCategory from '../exp-budget-setter/exp-budget-setter'
import AddItemButton from '../icons/add-item/add-item'

const MonthlyBudgetsList = () => {
	const [addCategory, setAddCategory] = useState({
		active: false
	})

	const [category, setCategory] = useState({
		name: '',
		budget: ''
	})

	const handleAddButton = e => {
		e.preventDefault()

		setAddCategory({
			...addCategory,
			active: !addCategory.active
		})
	}

	const handleChange = e => {
		// take category input form SetMonthly?
		// take budget values form there
	}

	return (
		<div>
			<div>
				{addCategory.active ? (
					<div>
						<SetMonthlyExpByCategory />
						<CustomButton type="submit">Set Budget</CustomButton>
					</div>
				) : null}
			</div>

			<CategoryItem />
			<AddItemButton onClick={handleAddButton} />
		</div>
	)
}

export default MonthlyBudgetsList
