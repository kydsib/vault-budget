import React from 'react'
import { useSelector } from 'react-redux'
import {
	selectIncome,
	selectExpenses
} from '../../redux/budget/budget.selector'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const BudgetCharts = () => {
	// kartojasi kodas, gal butu galima sutvarkyti?
	const { byId: expId } = useSelector(state => selectExpenses(state))
	const { byId: incId } = useSelector(state => selectIncome(state))

	const combinedData = { ...expId, ...incId }
	const finalDtata = Object.values(combinedData)
	// Could I do this part in more simple manner?
	// Ombining categories by name and adding up the values
	let filteredArr = []
	finalDtata.forEach(function(item) {
		var key = ['category'].map(stats => item[stats])
		if (!this[key]) {
			this[key] = { category: item.category, amount: 0 }
			filteredArr.push(this[key])
		}
		this[key].amount = Number(this[key].amount + Number(item.amount))
	}, {})

	const dataToDisplay = filteredArr.map(({ category, amount }) => [
		category,
		amount
	])

	const Options = {
		// Highcharts object for data display
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: 'Monthly budget'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
				},
				showInLegend: true
			}
		},
		series: [
			{
				name: 'Categories',
				colorByPoint: true,
				data: [...dataToDisplay]
			}
		]
	}

	return <HighchartsReact highcharts={Highcharts} options={Options} />
}

export default BudgetCharts
