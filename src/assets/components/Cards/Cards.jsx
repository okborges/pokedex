import './Cards.css'

export const Cards = ({
	id,
	generation,
	image,
	name,
	type,
	habitat,
	height,
	weight,
	power,
}) => {
	return (
		<>
			<div className="bg-card">
				<header className="card-header">
					<p>#{id}</p>
					<p className="gen">Generation {generation}</p>
				</header>

				<div className="infos-card">
					<img
						src={image.one}
						alt=""
						width={150}
						className="img-card"
					/>
					<h1 className="name">{name}</h1>

					{type.map((item, index) => (
						<h2 key={index} className="type">
							{item}
						</h2>
					))}
					
					<h3 className="default">shiny</h3>
					<h4 className="habitat">
						<span>Habitat:</span> {habitat}
					</h4>
					<p className="infos">
						Height {height}cm / Weight {weight}kg
					</p>
					<button className="power">Power {power}</button>
				</div>
			</div>
		</>
	)
}
