//style
import './Filter.css'

import { useState } from 'react'

import filterList from './filterList.json'

export const Filter = ({ types }) => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="filterContainer">
			<button onClick={() => setToggle(!toggle)} className="filterTitle">
				Filter by type
			</button>
			<ul className="tagContainer" style={{display: toggle ? 'grid' : 'none'}}>
				{filterList.types.map((type) => (
					<li key={type.name}>
						<input 
							type="checkbox" 
							className='checkbox' 
							name="checkboxType"
							value={type.name}
							id={type.name} 
							style={{display: 'none'}}
							onChange={e => console.log(e.target.checked, e.target.value)}
						/>
						<label htmlFor={type.name} className={`tag type-${type.name}`}>{type.name}</label>
					</li>
				))}
			</ul>
		</div>
	)
}
