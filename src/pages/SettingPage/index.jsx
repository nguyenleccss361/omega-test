import { useState } from 'react'
import './index.scss'

function SettingPage() {
	const [date, setDate] = useState("2023-02-03")
	function handleDate(e) {
		setDate(e.target.value)
	}

	const [color, setColor] = useState("#000000")
	function handleColor(e) {
		setColor(e.target.value)
	}

	return (
		<div className="setting-container">
			<div className="setting-title">Settings</div>

			<form>
				<div className="setting-form">
					<label htmlFor="email">Title: </label>
					<input style={{ color: color }} type="email" id="email"
						pattern=".+@globex\.com" size="30" required></input>
				</div>

				<div className="setting-form">
					<label htmlFor="title">Email: </label>
					<input style={{ color: color }} type="text" id="title" required></input>
				</div>

				<div className="setting-form">
					<label htmlFor="head">Background Color: </label>
					<input style={{ color: color }} type="color" id="head" name="head"
						value={color} onChange={handleColor} required></input>
				</div>

				<div className="setting-form">
					<label htmlFor="start">Active date: </label>
					<input style={{ color: color }} type="date" id="start" name="trip-start"
						value={date} onChange={handleDate} required></input>
				</div>
			</form>
		</div>
	)
}

export default SettingPage