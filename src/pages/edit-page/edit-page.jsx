import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import CstomButton from '../../components/custom-button/custom-button'
import {
	editExpEntry,
	deleteExpense,
	recalcExpTimeSpent
} from '../../redux/expenses/expenses.actions'
import { editIncEntry, deleteIncome } from '../../redux/income/income.actions'
import {
	deleteExpFromBudget,
	deleteIncFromBudget,
	incEditChangesBudget,
	expEditChangesBudget
} from '../../redux/budget/budget.actions'
import BudgetCategories from '../../components/budget-categories/budget-categories'

import './edit-page.styles.scss'

const EditPage = ({ match }) => {
	const dispatch = useDispatch()
	const id = match.params.id

	// deciding if working w/ inc or exp
	const item = useSelector(state =>
		state.expenses.byId[id]
			? state.expenses.byId[id]
			: state.income.byId[id]
	)

	const [currentData, setCurrentData] = useState({
		id: item.id,
		category: item.category,
		description: item.description,
		amount: item.amount,
		time: item.time,
		timeSpent: item.timeSpent
	})
	// not sure if this an optimal approach or I should use
	// recalcExpTimeSpent logic
	const [oldData] = useState({
		id: item.id,
		category: item.category,
		description: item.description,
		amount: item.amount,
		time: item.time,
		timeSpent: item.timeSpent
	})

	const handleEdits = e => {
		const { name, value } = e.target

		setCurrentData({
			...currentData,
			[name]: value
		})
	}

	const deleteIncomeActions = data => {
		return dispatch => {
			dispatch(deleteIncome(data.id))
			dispatch(deleteIncFromBudget(data))
			dispatch(recalcExpTimeSpent())
		}
	}

	const editIncomeActions = data => {
		const payload = {
			amountDifference: currentData.amount - oldData.amount,
			timeSpentDiff: currentData.timeSpent - oldData.timeSpent
		}

		return dispatch => {
			dispatch(editIncEntry(data)) // veikia
			dispatch(incEditChangesBudget(payload))
			// exp approach is better because it gets state inside a function
			// so I don't need to calculate it in the component
			dispatch(recalcExpTimeSpent())
		}
	}

	const editExpActions = data => {
		const payload = {
			amountDifference: oldData.amount - currentData.amount,
			timeSpentDiff: oldData.timeSpent - currentData.timeSpent
		}

		return dispatch => {
			dispatch(editExpEntry(data))
			dispatch(recalcExpTimeSpent())
			dispatch(expEditChangesBudget(payload))
		}
	}

	return (
		<div key={item.id} className="eidt-page">
			<div className="edit-box">
				<div className="edit-pair">
					<label>Date</label>
					<input
						name="time"
						className="edit"
						onChange={handleEdits}
						value={currentData.time}
					/>
				</div>
				<div className="edit-pair">
					<label>Amount</label>
					<input
						name="amount"
						className="edit"
						onChange={handleEdits}
						value={currentData.amount}
					/>
				</div>
				<div className="edit-pair">
					<label>Category</label>
					{/* // reikes sussitvarkyti kaip perduodu values? */}
					<BudgetCategories
						name="category"
						value={currentData.category}
						handleChange={handleEdits}
					/>
				</div>
				<div className="edit-pair">
					<label>Description</label>
					<input
						name="description"
						className="edit"
						onChange={handleEdits}
						value={currentData.description}
					/>
				</div>
				{currentData.category === 'income' ? (
					<div className="edit-pair">
						<label>Time Spent</label>
						<input
							name="timeSpent"
							className="edit"
							onChange={handleEdits}
							value={currentData.timeSpent}
						/>
					</div>
				) : null}
			</div>
			<div className="finalize-edits">
				<Link to="/budget">
					<CstomButton
						onClick={() =>
							currentData.category === 'income'
								? dispatch(editIncomeActions(currentData))
								: dispatch(editExpActions(currentData))
						}
					>
						Save
					</CstomButton>
				</Link>

				<Link to="/budget">
					<CstomButton
						className="custom-button custom-button--delete"
						onClick={() =>
							currentData.category === 'income'
								? dispatch(deleteIncomeActions(currentData))
								: dispatch(
										deleteExpense(currentData.id),
										dispatch(
											deleteExpFromBudget(currentData)
										)
								  )
						}
					>
						Delete
					</CstomButton>
				</Link>
			</div>
		</div>
	)
}

export default EditPage
