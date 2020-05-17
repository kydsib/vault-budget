import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import {
	deleteExpense,
	deleteIncome,
	editEntry
} from '../../redux/budget/budget.actions'
import CustomButton from '../../components/custom-button/custom-button'
import BudgetCategories from '../../components/budget-categories/budget-categories'

const EditPage = ({ match }) => {
	const dispatch = useDispatch()
	const id = match.params.id

	const item = useSelector(state =>
		state.budget.expenses.byId[id]
			? state.budget.expenses.byId[id]
			: state.budget.income.byId[id]
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
					{/* // reikes sussitvarkyti kaip perduodu values */}
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
					<button onClick={() => dispatch(editEntry(currentData))}>
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
								? dispatch(deleteIncome(currentData.id))
								: dispatch(deleteExpense(currentData.id))
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
