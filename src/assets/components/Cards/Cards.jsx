import { useState } from 'react'
import './Cards.css'
import Pokemons from './../../mooks/mook.json'
import image from '../../svg/1.svg'

export const Cards = ({ id, generation }) => {
	const [pokemons, usePokemons] = useState(Pokemons)
	console.log(pokemons)

	return (
		<>
			<div className="bg-card">
				<header>
					<p>#{id}</p>
					<span>Generation {generation}</span>
				</header>

				<img src={image} alt="" width={177} />
				<h1>Bulbasaur</h1>
				<h2>grass</h2>
				<h3>shiny</h3>
				<h4>Habitat: grassland</h4>
				<p>Height 70cm / Weight 6.9kg</p>
				<button>Power 318</button>
			</div>
		</>
	)
}
