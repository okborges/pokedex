/* eslint-disable react-hooks/exhaustive-deps */
import './Cards.css'
import '../../components/BtnToggle.css'
import { useEffect, useState } from 'react'

export const Cards = ({
	id,
	generation,
	image,
	name,
	type,
	habitat,
	height,
	weight,
	power,
}) => {
	const [shinyPokemon, setShinyPokemon] = useState('normal')
	const [images, setImages] = useState()
	const [isActive, setIsActive] = useState()

	const handleClick = () => {
		setIsActive(!isActive)
	}

	function tradeShiny() {
		handleClick()
		if (isActive) {
			setShinyPokemon('shiny')
		} else {
			setShinyPokemon('normal')
		}
	}

	useEffect(() => {
		setShinyPokemon('normal')
		setImages(image[shinyPokemon].two)
		setIsActive(true)
	}, [])
	useEffect(() => {
		if (shinyPokemon === 'normal') {
			setImages(image[shinyPokemon].two)
		} else {
			setImages(image[shinyPokemon].two)
		}
	}, [shinyPokemon])

	return (
		<>
			<div className="bg-card">
				<header className="card-header">
					<p>#{id}</p>
					<p className={`gen gen-${generation}`}>
						Generation {generation}
					</p>
				</header>

				<div className="infos-card">
					<img
						onMouseOver={() => setImages(image[shinyPokemon].gif)}
						onMouseLeave={() => setImages(image[shinyPokemon].two)}
						src={images}
						alt=""
						width={150}
						height={150}
						className="img-card"
					/>
					<h1 className="name">{name}</h1>

					<section className="section-type">
						{type.map((item, index) => (
							<h2 key={index} className={`type type-${item}`}>
								{item}
							</h2>
						))}
					</section>

					<button
						className={`box ${!isActive ? 'active' : ''}`}
						onClick={tradeShiny}
					/>

					<h4 className="habitat">
						<span>Habitat:</span> {habitat}
					</h4>

					<p className="infos">
						Height {height}cm / Weight {weight}kg
					</p>

					<button className="power">Power {power}</button>
				</div>
			</div>
		</>
	)
}
