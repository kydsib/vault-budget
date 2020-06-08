import React from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as Logo } from '../icons/logo/piggy-bank.svg'

import './header.styles.scss'

const Header = () => {
	return (
		<div className="main-header">
			<NavLink className="logo-container" to="/budget">
				<Logo className="logo" />
			</NavLink>
			<NavLink className="option" to="/budget-planning">
				Expense Planning
			</NavLink>
			<NavLink className="option" to="/budget-savings">
				Savings
			</NavLink>
		</div>
	)
}

export default Header
