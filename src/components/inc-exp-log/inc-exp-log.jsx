import React from 'react'
import { useSelector } from 'react-redux'

import SingleItem from '../single-item/single-itmem'

const IncomeAndExpenseLog = () => {
	const incomeData = useSelector(state => state.budget.income)
	const expData = useSelector(state => state.budget.expenses)
	const combinedData = { ...incomeData, ...expData }
	// console.log(combinedData)
	console.log(Object.values(combinedData))
	console.log(Object.keys(combinedData))
	return (
		<div className="log-container">
			<ul className="log-container__header"></ul>
			<div className="data-log">
				{/* {combinedData.map(item => (
					<SingleItem
						id={item.id}
						category={item.category}
						description={item.description}
						amount={item.amount}
						timeSpent={item.timeSpent}
					/>
				))} */}
			</div>
		</div>
	)
}

export default IncomeAndExpenseLog
