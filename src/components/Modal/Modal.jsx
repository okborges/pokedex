import React from 'react'
import { useState, useEffect } from 'react'
import ReactModal from 'react-modal'

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
			<button onClick={closeModal}>X</button>
			<p>#{pokemon.id}</p>
			<span>generation {pokemon.generation}</span>
			<h1>{pokemon.name}</h1>
			<img
				onMouseOver={() =>
					setImages(pokemon.image?.[shinyPokemon].gif)
				}
				onMouseLeave={() =>
					setImages(pokemon.image?.[shinyPokemon].two)
				}
				src={images}
				alt=""
				width={400}
				height={400}
			/>
			<button
				className={`box ${!isActive ? 'active' : ''}`}
				onClick={tradeShiny}
			/>
			<p>Specie: {pokemon.specie}</p>
			<p>Descripition: {pokemon.description}</p>

		</ReactModal>
	)
}
