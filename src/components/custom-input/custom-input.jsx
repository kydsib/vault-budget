import React from 'react'

import './custom-input.styles.scss'

const CustomInput = ({
	className,
	type,
	name,
	placeholder,
	handleChange,
	value,
	requidred,
	disabled
}) => {
	return (
		<input
			onChange={handleChange}
			className={className}
			placeholder={placeholder}
			type={type}
			name={name}
			value={value}
			requidred={requidred}
			disabled={disabled}
		/>
	)
}

export default CustomInput
