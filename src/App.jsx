import './App.css'
import { Cards } from './assets/components/Cards/Cards'
import Pokemons from './assets/mooks/mook.json'

function App() {
	const poke = Pokemons
	return (
		<>
			<div className="container">
				{console.log(poke[0])}
				{Pokemons.map((item) => (
					<Cards
						key={item.id}
						id={item.id}
						generation={item.generation}
						image={item.image.default}
						name={item.name}
						type={item.type}
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

export default App;
