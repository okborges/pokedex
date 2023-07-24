/* eslint-disable react-hooks/exhaustive-deps */
import BtnToggle from '../BtnToggle/BtnToggle'
import './Cards.css'
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
	const [shinyPokemon, setShinyPokemon] = useState('default')
	const [images, setImages] = useState(image[shinyPokemon].two)
	function tradeShiny() {
		if (shinyPokemon === 'default') {
			setShinyPokemon('shiny')
		} else {
			setShinyPokemon('default')
		}
	}
	useEffect(() => {
		setShinyPokemon('default')
		setImages(image[shinyPokemon].two)
	}, [])
	useEffect(() => {
		if (shinyPokemon === 'default') {
			console.log('entrou')
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
					<p className="gen">Generation {generation}</p>
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

					<div></div>

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
