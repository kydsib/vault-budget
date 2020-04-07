import React from 'react'

import './custom-input.styles.scss'

const CustomInput = ({
	className,
	type,
	name,
	placeholder,
	handleChange,
	value
}) => {
	return (
		<input
			onChange={handleChange}
			className={className}
			placeholder={placeholder}
			type={type}
			name={name}
			value={value}
		/>
	)
}

export default CustomInput
