import React from 'react'

import TrashCan from '../icons/trash-can/trash-can'
import EditButton from '../icons/edit/edit'

import './single-item.styles.scss'

const SingleItem = ({ id, category, description, amount, timeSpent }) => {
	return (
		<tr key={id}>
			<td className="item">{category}</td>
			<td className="item">{description}</td>

			<td className="item item--last">
				<span className={`${category === 'income' ? 'green' : 'red'}`}>
					&euro;{amount} / {timeSpent}h
				</span>
				<span>
					<span className="margin">
						<EditButton />
					</span>

					<span>
						<TrashCan />
					</span>
				</span>
			</td>
		</tr>
	)
}

export default SingleItem
