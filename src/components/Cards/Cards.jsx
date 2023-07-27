/* eslint-disable react-hooks/exhaustive-deps */
import './Cards.css';
import '../../components/BtnToggle.css';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';

export const Cards = ({
	pokemon
}) => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [shinyPokemon, setShinyPokemon] = useState('normal')
	const [images, setImages] = useState()
	const [isActive, setIsActive] = useState()

	const handleClick = () => {
		setIsActive(!isActive)
	}

	function openModal() {
		setIsOpen(true);
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		setIsOpen(false);
		document.body.style.overflow = 'unset';
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
		setImages(pokemon.image[shinyPokemon].two)
		setIsActive(true)
	}, [])
	useEffect(() => {
		if (shinyPokemon === 'normal') {
			setImages(pokemon.image[shinyPokemon].two)
		} else {
			setImages(pokemon.image[shinyPokemon].two)
		}
	}, [shinyPokemon])

	return (
		<>
			<div id={pokemon.id} className="bg-card">
				<header className="card-header">
					<p>#{pokemon.id}</p>
					<p className={`gen gen-${pokemon.generation.toUpperCase()}`}>
						Generation {pokemon.generation.toUpperCase()}
					</p>
				</header>

				<div className="infos-card">
					<img
						onMouseOver={() => setImages(pokemon.image[shinyPokemon].gif)}
						onMouseLeave={() => setImages(pokemon.image[shinyPokemon].two)}
						src={images}
						alt=""
						width={150}
						height={150}
						className="img-card"
					/>
					<h1 className="name">{pokemon.name}</h1>

					<section className="section-type">
						{pokemon.types.map((item, index) => (
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
						<span>Habitat:</span> {pokemon.habitat}
					</h4>

					<p className="infos">
						Height {pokemon.height}m / Weight {pokemon.weight}kg
					</p>

					<button onClick={openModal} className="power">Power {pokemon.power}</button>
				</div>
			</div>
			<Modal 
				modalIsOpen={modalIsOpen} 
				closeModal={closeModal}
			/>
		</>
	)
}
