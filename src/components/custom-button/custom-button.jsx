import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ value, onClick, type }) => {
	return (
		<button onClick={onClick} className="btn" type={type}>
			{value}
		</button>
	)
}

export default CustomButton
