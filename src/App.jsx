import './App.css'
import { Cards } from './components/Cards/Cards'
import poke from './mooks/mook'

function App() {
	return (
		<>
			<div className="container">
				{poke.map((item) => (
					<Cards
						key={item.id}
						id={item.id}
						generation={item.generation}
						image={item.image}
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

export default App
