import React from 'react'

import CustomButton from '../custom-button/custom-button'

const AlertBox = () => {
	return (
		<div className="alet-container">
			<span className="txt">Are you sure?</span>
			<div className="buttons">
				<CustomButton>si claro</CustomButton>
				<CustomButton>番号</CustomButton>
			</div>
		</div>
	)
}

export default AlertBox
