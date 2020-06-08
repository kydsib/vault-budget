import React from 'react'

import ProgressBar from '../progress-bar/progress-bar'

const CategoryItem = ({ catBud, catExp, catName }) => {
	const progressInPercent = ((catExp * 100) / catBud).toFixed(1)
	console.log(progressInPercent)
	return (
		<div className="category-item">
			<div className="category-item__top">
				<span>Category - {catName} </span>
				<span>Budget - {catBud}</span>
			</div>
			<ProgressBar prc={progressInPercent} />
			<span>Expenses - {catExp}</span>
		</div>
	)
}

export default CategoryItem
