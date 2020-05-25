import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import {
	editExpEntry,
	deleteExpense
} from '../../redux/expenses/expenses.actions'
import { editIncEntry, deleteIncome } from '../../redux/income/income.actions'
import {
	deleteExpFromBudget,
	deleteIncFromBudget
} from '../../redux/budget/budget.actions'

import BudgetCategories from '../../components/budget-categories/budget-categories'

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

	const handleEdits = e => {
		const { name, value } = e.target

		setCurrentData({
			...currentData,
			[name]: value
		})
	}

	return (
		<div key={item.id}>
			<div className="edit-box">
				<div>
					<span>Date</span>
					<input
						name="time"
						className="edit"
						onChange={handleEdits}
						value={currentData.time}
					/>
				</div>
				<div>
					<span>Amount</span>
					<input
						name="amount"
						className="edit"
						onChange={handleEdits}
						value={currentData.amount}
					/>
				</div>
				<div>
					<span>Category</span>
					{/* // reikes sussitvarkyti kaip perduodu values? */}
					<BudgetCategories
						name="category"
						value={currentData.category}
						handleChange={handleEdits}
					/>
				</div>
				<div>
					<span>Description</span>
					<input
						name="description"
						className="edit"
						onChange={handleEdits}
						value={currentData.description}
					/>
				</div>
				{currentData.category === 'income' ? (
					<div>
						<span>Time Spent</span>
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
					<button
						onClick={() =>
							currentData.category === 'income'
								? dispatch(editIncEntry(currentData))
								: dispatch(editExpEntry(currentData))
						}
					>
						Save Changes
					</button>
				</Link>

				<Link to="/budget">
					<button>Discard Changes</button>
				</Link>
				<Link to="/budget">
					<button
						onClick={() =>
							currentData.category === 'income'
								? dispatch(
										deleteIncome(currentData.id),
										dispatch(
											deleteIncFromBudget(currentData)
										)
								  )
								: dispatch(
										deleteExpense(currentData.id),
										dispatch(
											deleteExpFromBudget(currentData)
										)
								  )
						}
					>
						Delete item
					</button>
				</Link>
			</div>
		</div>
	)
}

export default EditPage
