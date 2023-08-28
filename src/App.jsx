import './App.css'
import { useState, useEffect } from 'react'
import { Cards } from './components/Cards/Cards'
import { api, baseUrl } from './api/api'
import { useKonamiCode } from './components/KonamiCode/useKonamiCode'
import Loader from './components/loader/loader'
import { Filter } from './components/Filter/FIlter'
import NotFound from './components/NotFound/NotFound'

function App() {
	//Array of pokemons/specials that will be rendered
	const [pokemons, setPokemons] = useState([])
	const [specialPokemons, setSpecialPokemons] = useState([])

	//filter logic by type
	const [typeFilter, setTypeFilter] = useState([])
	const [filtersDisable, setFiltersDisable] = useState(false)
	const [buttonFilterDisabled, setButtonFilterDisabled] = useState(true)
	const [notFound, setNotFound] = useState(false)

	//variable to give permission to load new pokemons
	const [loading, setLoading] = useState(true)

	//variable to control the modal
	const [modalIsOpen, setIsOpen] = useState(false)

	const [loader, setLoader] = useState(true)

	//request link logic and request link
	const [link, setLink] = useState('/pokemonFromTo?pageSize=16&currentPage=1')

	window.addEventListener('scroll', () => {
		if (userReachedBottom()) {
			setLoading(true)
		}
	})

	function reqFilterPokemons() {
		setPokemons([])
		if (typeFilter.length === 2)
			setLink(
				`pokemonFromTo?pageSize=16&currentPage=1&type1=${typeFilter[0]}&type2=${typeFilter[1]}`
			)
		else if (typeFilter.length === 1)
			setLink(
				`pokemonFromTo?pageSize=16&currentPage=1&type1=${typeFilter[0]}`
			)
		else {
			setLink('/pokemonFromTo?pageSize=16&currentPage=1')
		}
		setLoading(true)
		console.log(loading)
	}

	function userReachedBottom() {
		if (window.innerHeight !== window.screen.height) {
			const scrollPosition = window.scrollY + window.innerHeight
			const documentHeight = document.getElementById(
				'pokemonsCardContainer'
			).offsetHeight
			return scrollPosition >= documentHeight - 150
		}
	}

	function openModal() {
		setIsOpen(true)
	}

	function addTypeInFilter(type) {
		setTypeFilter((actualTypeFilter) => [...actualTypeFilter, type])
	}

	function removeTypeInFilter(type) {
		const newTypeArray = typeFilter?.filter((t) => t !== type)
		setFiltersDisable(false)
		setTypeFilter(newTypeArray)
	}

	useEffect(() => {
		api.get('/pokemon/specials')
			.then((response) => {
				setSpecialPokemons(response.data.pokemons)
			})
			.catch((err) =>
				window.alert('OPS! Parece que a lLinkAPI caiu', err)
			)
	}, [])

	useEffect(() => {
		if (typeFilter.length === 2) {
			setFiltersDisable(true)
		}
	}, [typeFilter])

	useEffect(() => {
		async function reqPokemons() {
			try {
				if (loading && link) {
					setNotFound(false)
					setLoader(true)
					const res = await api.get(link)
					setPokemons((actualPokemons) => [
						...actualPokemons,
						...res.data.pokemons,
					])
					const nextLink = res.data.info.nextPage?.replace(
						baseUrl,
						''
					)
					setButtonFilterDisabled(false)
					if (nextLink) {
						setLink(nextLink)
					} else {
						setLink(null)
						setLoader(false)
					}
				}
			} catch (err) {
				if (err.response.status === 404) {
					setNotFound(true)
					setLoader(false)
				}
			} finally {
				setLoading(false)
			}
		}
		reqPokemons()
	}, [loading])

	return (
		<div>
			<button
				onClick={openModal}
				style={{ display: useKonamiCode() ? 'block' : 'none' }}
				className="botao-especial"
			>
				Pokémons especiais
			</button>

			<Filter
				addTypeInFilter={addTypeInFilter}
				filtersDisable={filtersDisable}
				removeTypeInFilter={removeTypeInFilter}
				reqFilterPokemons={reqFilterPokemons}
				buttonFilterDisabled={buttonFilterDisabled}
			/>

			{notFound && <NotFound />}

			<div
				style={{ display: modalIsOpen ? 'grid' : 'none' }}
				className="div-card-special"
			>
				{specialPokemons?.map((item) => (
					<Cards pokemon={item} key={item.id} />
				))}
			</div>

			<div className="container" id="pokemonsCardContainer">
				{pokemons &&
					pokemons.map((item) => (
						<Cards key={item.id} pokemon={item} />
					))}
			</div>

			{loader && <Loader />}
		</div>
	)
}

export default App
