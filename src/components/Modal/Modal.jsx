import { useState, useEffect } from 'react'
import ReactModal from 'react-modal'
import './Modal.css'

export default function Modal({ modalIsOpen, closeModal, pokemon }) {
	const [shinyPokemon, setShinyPokemon] = useState('normal')
	const [images, setImages] = useState()
	const [isActive, setIsActive] = useState()

	function tradeShiny() {
		handleClick()
		if (isActive) {
			setShinyPokemon('shiny')
		} else {
			setShinyPokemon('normal')
		}
	}

	const handleClick = () => {
		setIsActive(!isActive)
	}

	useEffect(() => {
		setShinyPokemon('normal')
		setImages(pokemon.image?.[shinyPokemon].two)
	}, [])

	useEffect(() => {
		if (shinyPokemon === 'normal') {
			setImages(pokemon.image?.[shinyPokemon].two)
		} else {
			setImages(pokemon.image?.[shinyPokemon].two)
		}
	}, [shinyPokemon])

	return (
		<ReactModal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Example Modal"
		>
			<section className="modal-container">
				<div className="container-header">
					<p>#{pokemon.id}</p>
					<span>Generation {pokemon.generation}</span>
					<button onClick={closeModal} className="close-button">
						&times;
					</button>
				</div>

				<h1 className="title-modal">{pokemon.name}</h1>

				<div className="infos-container">
					<img
						onMouseOver={() =>
							setImages(pokemon.image?.[shinyPokemon].gif)
						}
						onMouseLeave={() =>
							setImages(pokemon.image?.[shinyPokemon].two)
						}
						src={images}
						alt=""
						width={190}
						height={190}
					/>
					<button
						className={`box ${!isActive ? 'active' : ''}`}
						onClick={tradeShiny}
					/>
					<p>
						<span className="span-bold ">Specie:</span>{' '}
						{pokemon.specie}
					</p>
					<p>
						<span className="span-bold "> Descripition:</span>{' '}
						{pokemon.description}
					</p>

					<div className="ability-container">
						<span className="span-bold">Ability:</span>
						{pokemon.ability?.map((item, index) => (
							<p key={index}>{item.name}</p>
						))}
					</div>
				</div>
			</section>
		</ReactModal>
	)
}
