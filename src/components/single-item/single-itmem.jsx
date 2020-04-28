import React from 'react'

import './single-item.styles.scss'

const SingleItem = ({ id, category, description, amount, timeSpent }) => {
	return (
		<tr key={id}>
			<td className="item">{category}</td>
			<td className="item">{description}</td>

			<td className={`item ${category === 'income' ? 'green' : 'red'}`}>
				&euro;{amount} / {timeSpent}h
			</td>
		</tr>
	)
}

export default SingleItem
