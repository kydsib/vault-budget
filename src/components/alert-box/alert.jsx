import React from 'react'

import CustomButton from '../custom-button/custom-button'

import './alert.styles.scss'

const AlertBox = ({
	handleAlert,
	handleDelete,
	resetItemDeleteValue,
	alertBox
}) => {
	// console.log(alertBox)
	return (
		<div>
			{alertBox === true ? (
				<div className="alert-container">
					<span className="alert-container__txt">
						Delete this budget?
					</span>
					<div className="alert-container__buttons">
						<CustomButton
							onClick={() => (
								handleDelete(),
								handleAlert(),
								resetItemDeleteValue()
							)}
						>
							si claro
						</CustomButton>
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
