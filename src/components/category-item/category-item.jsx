import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
	editMonthlyCategoryBudget,
	deleteCategoryBudget
} from '../../redux/expenses/expenses.actions'
import SaveIcon from '../icons/save-icon/save'
import ProgressBar from '../progress-bar/progress-bar'
import CustomInput from '../custom-input/custom-input'
import EditButon from '../icons/edit/edit'
import TrashCan from '../icons/trash-can/trash-can'

import './category-item.styles.scss'

const CategoryItem = ({
	categoryBudget,
	categoryExpense,
	categoryName,
	editActive,
	valueEditable,
	// handlePrepareToDelete,
	readyToDelete,
	handleAlert,
	getData,
	trigerDelete
	// handleDelete
}) => {
	const dispatch = useDispatch()
	const progressInPercent = (
		(categoryExpense * 100) /
		categoryBudget
	).toFixed(1)

	const [editedBudgetValue, setEditedBudgetValue] = useState({
		amount: ''
	})

	const handleChange = e => {
		const { name, value } = e.target

		setEditedBudgetValue({
			...editedBudgetValue,
			[name]: value
		})
	}

	const deleteWasClickedOn = {
		id: categoryName,
		budgetAmount: categoryBudget,
		currentExp: categoryExpense
	}

	return (
		<div className="category-item">
			<div className="category-item__top">
				<span className="category-name">{categoryName} </span>
				{valueEditable === true ? (
					<span>{categoryBudget}</span>
				) : (
					<CustomInput
						name="amount"
						handleChange={handleChange}
						defaultValue={categoryBudget}
						placeholder={categoryBudget}
					></CustomInput>
				)}
			</div>
			{/* // conditionaly render mid, discard in total budget */}
			<div className="category-item__mid">
				<ProgressBar
					className="progress"
					prc={progressInPercent >= 100 ? 100 : progressInPercent}
				/>
				<div className="active-buttons">
					<EditButon onClick={editActive} />
					<TrashCan
						onClick={() => (
							getData(deleteWasClickedOn),
							handleAlert(),
							trigerDelete()
						)}
					/>
					<SaveIcon
						// Make edit Field inactive after save
						onClick={() =>
							dispatch(
								editMonthlyCategoryBudget({
									amount:
										editedBudgetValue.amount -
										categoryBudget,
									id: categoryName
								})
							)
						}
					/>
				</div>
			</div>
			<div className="category-item__bot">
				<span>Expenses</span>
				<span>{categoryExpense}</span>
			</div>
		</div>
	)
}

export default CategoryItem
