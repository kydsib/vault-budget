import React from 'react'

import './custom-input.styles.scss'

const CustomInput = ({
	className,
	type,
	name,
	placeholder,
	handleChange,
	value,
	requidred
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
		/>
	)
}

export default CustomInput
