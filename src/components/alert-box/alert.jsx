import React, { useState } from 'react'

import CustomButton from '../custom-button/custom-button'

import './alert.styles.scss'

const AlertBox = ({ handleAlert, alertBox }) => {
	return (
		<div>
			{alertBox.dispalay === true ? (
				<div className="alert-container">
					<span className="alert-container__txt">Are you sure?</span>
					<div className="alert-container__buttons">
						<CustomButton>si claro</CustomButton>
						<CustomButton
							onClick={handleAlert}
							className="custom-button custom-button--delete"
						>
							番号
						</CustomButton>
					</div>
				</div>
			) : null}
		</div>
	)
}

export default AlertBox
