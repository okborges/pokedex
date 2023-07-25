import './App.css'
import { useState, useEffect } from 'react'
import { Cards } from './components/Cards/Cards'
import { api, baseUrl } from './api/api'

function App() {
	const [pokemons, setPokemons] = useState([])
	const [loading, setLoading] = useState(true)
	const [link, setLink] = useState('/pokemon?currentPage=1&pageSize=16')

	window.addEventListener('scroll', () => {
		if (userReachedBottom()) {
			setLoading(true)
		}
	})

	function userReachedBottom() {
		const scrollPosition = window.scrollY + window.innerHeight
		const documentHeight = document.documentElement.offsetHeight
		return scrollPosition >= documentHeight
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
				})
				.catch((err) => console.error('Aconteceu algo de errado', err))
			setLoading(false)
		}
	}

	useEffect(addPokemons, [loading])

	return (
		<>
			<div className="container">
				{pokemons?.map((item) => (
					<Cards
						key={item.id}
						id={item.id}
						generation={item.generation.toUpperCase()}
						image={item.image}
						name={item.name}
						type={item.types}
						habitat={item.habitat}
						height={item.height}
						weight={item.weight}
						power={item.power}
					/>
				))}
			</div>
		</>
	)
}

export default App
