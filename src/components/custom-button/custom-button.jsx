import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, ...otherProps }) => {
	return (
		<button className="btn" {...otherProps}>
			{children}
		</button>
	)
}

export default CustomButton
