import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCategoryBudget } from '../../redux/expenses/expenses.actions'

import CategoryItem from '../category-item/category-item'
import CustomButton from '../custom-button/custom-button'
import AddItemButton from '../icons/add-item/add-item'
import BudgetCategories from '../budget-categories/budget-categories'
import CustomInput from '../custom-input/custom-input'
import AlertBox from '../alert-box/alert'

import './monthly-budget.styles.scss'

const MonthlyBudgetsList = () => {
	const [addCategory, setAddCategory] = useState({
		active: false
	})

	const [editCategory, setEditCategory] = useState({
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

	const handleEditCategoryBudget = e => {
		e.preventDefault()

		setEditCategory({
			...editCategory,
			active: !editCategory.active
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

	const [alertBox, setAlertBox] = useState({
		dispalay: false
	})

	const handleAlert = e => {
		e.preventDefault()

		setAlertBox({
			...alertBox,
			dispaly: !alertBox.dispalay
		})
	}

	return (
		<div>
			<AlertBox
				handleAlert={handleAlert}
				// handleDelete={}
				alertBox={alertBox.dispalay}
			/>
			<form onSubmit={handleSubmit}>
				{addCategory.active ? (
					// iskelti sita i atskira komponenta?
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
					categoryName="Total budget"
					categoryBudget={totalMonthlyBudget}
					categoryExpense={totalMonthlyExpenses}
				/>
				{Object.values(expByCategory).map(item => (
					<CategoryItem
						key={item.id}
						id={item.id}
						categoryBudget={item.categoryBudget}
						categoryExpense={item.categoryExpenses}
						categoryName={item.categoryName}
						editActive={handleEditCategoryBudget}
						valueEditable={editCategory.active}
						editBudget={handleChange}
						handleAlert={handleAlert}
					/>
				))}

				<AddItemButton onClick={handleAddButton} />
			</form>
		</div>
	)
}

export default MonthlyBudgetsList
