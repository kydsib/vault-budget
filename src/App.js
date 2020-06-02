import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'

import EditPage from './pages/edit-page/edit-page'
import BudgetPage from './pages/budget/budget-page'
import BudgetPlanning from './pages/planning/budget-planning-page'
import TestComponent from './components/testing-component/testing-component'

import './App.scss'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/entry/:id" exact component={EditPage} />
				<Route path="/testing" component={TestComponent} />
				<Route
					path="/budget-planning"
					exact
					component={BudgetPlanning}
				/>
				<Route path="/budget" component={BudgetPage} />
			</Switch>
		</Router>
	)
}

export default App
