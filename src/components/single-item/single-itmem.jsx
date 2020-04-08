import React from 'react'

const SingleItem = ({ id, category, description, amount, timeSpent }) => {
	return (
		<div key={id} className="item-container">
			<span>{category}</span>
			<span>{description}</span>
			<span>{amount}</span>
			<span>{timeSpent}</span>
		</div>
	)
}

export default SingleItem
