import './Cards.css'
import image from '../../assets/svg/1.svg'

export const Cards = () => {
	return (
		<>
			<div className="bg-card">
				<header className="card-header">
					<p>#001</p>
					<p className="gen">Generation I</p>
				</header>

				<div className="infos-card">
					<img
						src={image}
						alt="pokemon image"
						width={150}
						height={150}
						className="img-card"
					/>
					<h1 className="name">pokemon</h1>

					<h2 className="type type-fire">fogo</h2>

					<h3 className="default type-shiny">shiny</h3>
					<h4 className="habitat">
						Habitat: <span>selva</span>
					</h4>
					<p className="infos">Height 70cm / Weight 80kg</p>
					<button className="power">Power 378</button>
				</div>
			</div>
		</>
	)
}
