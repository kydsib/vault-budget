import React from 'react'

import './single-item.styles.scss'

const SingleItem = ({ id, category, description, amount, timeSpent }) => {
	return (
		<div
			key={id}
			className={`item-container ${
				category === 'income' ? 'green' : 'red'
			}`}
		>
			<span>{category}</span>
			<span>{description}</span>
			<span>{amount}</span>
			<span>{timeSpent}</span>
		</div>
	)
}

export default SingleItem
