import React from 'react'
import { Link } from 'react-router-dom'

import TrashCan from '../icons/trash-can/trash-can'
import EditButton from '../icons/edit/edit'

import './single-item.styles.scss'

const SingleItem = ({
	id,
	idData,
	category,
	description,
	amount,
	timeSpent
}) => {
	const data = idData

	return (
		<tr key={idData}>
			<td className="item">{category}</td>
			<td className="item">{description}</td>

			<td className="item item--last">
				<span className={`${category === 'income' ? 'green' : 'red'}`}>
					&euro;{amount} / {timeSpent}h
				</span>
				<span>
					<span className="margin">
						<Link to={`entry/${data}`}>
							<EditButton />
							<TrashCan />
						</Link>
					</span>

					<span></span>
				</span>
			</td>
		</tr>
	)
}

export default SingleItem
