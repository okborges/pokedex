import './App.css'
import { useState, useEffect } from 'react'
import { Cards } from './components/Cards/Cards'
import { api, baseUrl } from './api/api'
import { useKonamiCode } from './components/KonamiCode/useKonamiCode'
import Modal from './components/Modal/Modal'
import Loader from './components/loader/loader'

function App() {
	const [pokemons, setPokemons] = useState([])
	const [specialPokemons, setSpecialPokemons] = useState([])
	const [loading, setLoading] = useState(true)
	const [modalIsOpen, setIsOpen] = useState(false)
	const [link, setLink] = useState('/pokemon?currentPage=1&pageSize=16')

	window.addEventListener('scroll', () => {
		if (userReachedBottom()) {
			setLoading(true)
		}
	})

	function openModal() {
		setIsOpen(true)
	}

	function userReachedBottom() {
		const scrollPosition = window.scrollY + window.innerHeight
		const documentHeight = document.documentElement.offsetHeight
		return scrollPosition >= documentHeight - 150
	}

	function addPokemons() {
		if (loading) {
			api.get(link)
				.then((response) => {
					const completeList = [
						...pokemons,
						...response.data.pokemons,
					]
					console.log(completeList)
					setPokemons(completeList)
					setLink(response.data.info.nextPage.replace(baseUrl, ''))
					setLoading(false)
				})
				.catch((err) => console.error('Aconteceu algo de errado', err))
		}
	}

	useEffect(() => {
		api.get('/pokemon/specials')
			.then((response) => {
				setSpecialPokemons(response.data.pokemons)
			})
			.catch((err) => console.error('Aconteceu algo de errado', err))
	}, [])

	useEffect(addPokemons, [loading])

	console.log(useKonamiCode())

	return (
		<>
			<button
				onClick={openModal}
				style={{ display: useKonamiCode() ? 'block' : 'none' }}
				className="botao-especial"
			>
				Pokémons especiais
			</button>
			<div
				style={{ display: modalIsOpen ? 'grid' : 'none' }}
				className="div-card-special"
			>
				{specialPokemons?.map((item) => (
					<div className="bg-card-especial">
						<Cards key={item.id} pokemon={item} />
					</div>
				))}
			</div>
			<div className="container">
				{pokemons?.map((item) => (
					<Cards key={item.id} pokemon={item} />
				))}
			</div>
			<Loader />
		</>
	)
}

export default App
