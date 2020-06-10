import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCategoryBudget } from '../../redux/expenses/expenses.actions'

import CategoryItem from '../category-item/category-item'
import CustomButton from '../custom-button/custom-button'
import AddItemButton from '../icons/add-item/add-item'
import BudgetCategories from '../budget-categories/budget-categories'
import CustomInput from '../custom-input/custom-input'

import './monthly-budget.styles.scss'

const MonthlyBudgetsList = () => {
	const [addCategory, setAddCategory] = useState({
		active: false
	})

	const [category, setCategory] = useState({
		id: '',
		categoryBudget: ''
	})

	const expByCategory = useSelector(state => state.expenses.budgetByCategory)
	const totalMonthlyBudget = useSelector(
		state => state.expenses.expBudget.totalSetBudget
	)
	const totalMonthlyExpenses = useSelector(
		state => state.expenses.expBudget.curentExp
	)

	const dispatch = useDispatch()

	const handleAddButton = e => {
		e.preventDefault()

		setAddCategory({
			...addCategory,
			active: !addCategory.active
		})
	}

	const handleChange = e => {
		e.preventDefault()

		const { name, value } = e.target

		if (e.target.name === 'categoryName') {
			setCategory({
				...category,
				[name]: value,
				id: e.target.value
			})
		} else {
			setCategory({
				...category,
				[name]: value
			})
		}
	}

	const handleSubmit = e => {
		e.preventDefault()

		setAddCategory({
			...addCategory,
			active: !addCategory.active
		})

		setCategory({
			...category,
			categoryName: '',
			categoryBudget: ''
		})
	}

	return (
		<form onSubmit={handleSubmit}>
			{addCategory.active ? (
				<fieldset>
					<BudgetCategories
						name="categoryName"
						handleChange={handleChange}
					/>
					<CustomInput
						name="categoryBudget"
						handleChange={handleChange}
						type="number"
						placeholder="Enter budget amount"
					/>
					<CustomButton
						onClick={() =>
							category.categoryName !== 'income'
								? dispatch(setCategoryBudget(category))
								: null
						}
						type="submit"
					>
						Set Budget
					</CustomButton>
				</fieldset>
			) : null}
			<CategoryItem
				catName="Total budget"
				catBud={totalMonthlyBudget}
				catExp={totalMonthlyExpenses}
			/>
			{Object.values(expByCategory).map(item => (
				<CategoryItem
					key={item.id}
					catBud={item.categoryBudget}
					catExp={item.categoryExpenses}
					catName={item.categoryName}
				/>
			))}

			<AddItemButton onClick={handleAddButton} />
		</form>
	)
}

export default MonthlyBudgetsList
