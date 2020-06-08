import React from 'react'

import './progress-bar.styles.scss'

const ProgressBar = ({ prc }) => {
	const progressStyle = {
		width: `${prc}%`
	}
	return (
		<div className="progress-bar">
			<div className="progress" style={progressStyle}></div>
		</div>
	)
}

export default ProgressBar
