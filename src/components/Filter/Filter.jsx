//style
import './Filter.css'

import { useRef, useState } from 'react'

import typeslist from './typesList'

export const Filter = ({ addTypeInFilter, filtersDisable, removeTypeInFilter, reqFilterPokemons }) => {
	const [toggle, setToggle] = useState(false);
	const typesRefs = useRef([])



	return (
		<div className="filterContainer">
			<button onClick={() => setToggle(!toggle)} className="filterTitle">
				Filter by type
			</button>
			<ul className="tagContainer" style={{display: toggle ? 'grid' : 'none'}}>
				{typeslist.map((type, index) => (
					<li key={index}>
						<input 
							type="checkbox" 
							className='checkbox' 
							name="checkboxType"
							value={type}
							id={type} 
							style={{display: 'none'}}
							ref={(element) => typesRefs.current[index] = element}
							onChange={e => {
								if (e.target.checked) {
									addTypeInFilter(e.target.value)

								} else {
									removeTypeInFilter(e.target.value)
								}
							}}
							disabled={filtersDisable && !typesRefs.current[index].checked}
						/>
						<label key={index} htmlFor={type} className={`tag type-${type}`} disabled={false}>{type}</label>
					</li>
				))}
			</ul>
			<button style={{display: toggle ? 'grid' : 'none'}} className='applyFilter' onClick={reqFilterPokemons}>Apply filter</button>
		</div>
	)
}
