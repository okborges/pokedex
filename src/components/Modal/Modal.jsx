import React from 'react'
import ReactModal from 'react-modal'

export default function Modal({ modalIsOpen, closeModal, pokemon }) {
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
			<img src={pokemon.image.normal.two} alt="" />
			<p>Specie: {pokemon.specie}</p>
			<p>Descripition: {pokemon.description}</p>
			
		</ReactModal>
	)
}
