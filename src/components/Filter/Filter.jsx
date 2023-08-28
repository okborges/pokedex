//style
import './Filter.css'

import { useRef, useState } from 'react'

import typeslist from './typesList'

export const Filter = ({ addTypeInFilter, filtersDisable, removeTypeInFilter, reqFilterPokemons, buttonFilterDisabled }) => {
	const [toggle, setToggle] = useState(false);
	const [animation, setAnimation] = useState('close');
	const typesRefs = useRef([]);

	const hide = () => {

		if (animation === 'open') {
			setAnimation('close')
		} else {
			setAnimation('open')
		}
		setToggle(!toggle);

	}


	return (
		<div className="filterContainer">
			<button onClick={() => {
				hide()
			}} className="filterTitle" disabled={buttonFilterDisabled}>
				Filter by type
			</button>
			<div className={`containerAnimate ${animation}`}>
				<ul className={`tagContainer`} >
					{typeslist.map((type, index) => (
						<li key={index}>
							<input
								type="checkbox"
								className='checkbox'
								name="checkboxType"
								value={type}
								id={type}
								style={{ display: 'none' }}
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
				<button className='applyFilter' onClick={reqFilterPokemons}>Apply filter</button>
			</div>
		</div>
	)
}
