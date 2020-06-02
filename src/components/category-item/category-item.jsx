import React from 'react'

import ProgressBar from '../progress-bar/progress-bar'

const CategoryItem = () => {
	return (
		<div className="category-item">
			<div className="category-item__top">
				<span>Category name </span>
				<span>Cat budget</span>
			</div>
			<ProgressBar />
			<span>Cat expenses</span>
		</div>
	)
}

export default CategoryItem
