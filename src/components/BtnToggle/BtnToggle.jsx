import './BtnToggle.css'

const BtnToggle = ({ toggleId }) => {
	return (
		<>
			<input className="tgl tgl-default" id={toggleId} type="checkbox" />
			<label
				className="tgl-btn"
				htmlFor={toggleId}
				data-tg-off="Default"
				data-tg-on="Shiny"
			></label>
		</>
	)
}

export default BtnToggle
