import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteExpense, deleteIncome } from '../../redux/budget/budget.actions'
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

	const testLog = e => {
		e.preventDefault()
		console.log('working')
	}

	const [currentData, editedData] = useState({
		id: item.id,
		category: item.category,
		description: item.description,
		amount: item.amount,
		time: item.time
	})

	return (
		<div>
			<div className="edit-box">
				<div>
					<span>Date</span>
					<input value={item.time} />
				</div>
				<div>
					<span>Amount</span>
					<input value={currentData.amount} />
				</div>
				<div>
					<span>Category</span>
					<BudgetCategories />
				</div>
				<div>
					<span>Description</span>
					<input value={currentData.description} />
				</div>
			</div>
			<div className="finalize-edits">
				<button onClick={testLog}>Save item</button>
				<button onClick={testLog}>Discard Changes</button>
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
