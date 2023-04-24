import classNames from "classnames";
import "./index.sass"

import { useState } from "react";

function Chat() {
	const [history, setHistory] = useState([{owner: false, message: "Im going to kill u!"}]);
	const [message, setMessage] = useState("");

	const handleMessageChange = (event) => {
		setMessage(event.target.value)
	}

	const handleEnterPressed = (event) => {
		if (event.key === 'Enter')
			addMessage()
	}

	const renderChat = () =>
	history.map((elem, index) => {
		const itemClasses = classNames(
			'chat__message',
			{'chat__message--user': elem.owner},
			{'chat__message--bot': !elem.owner}
		) 
		return <li className={itemClasses} key={index}>{elem.message}</li>
	})

	const addMessage = () => {
		const newHistory = history
		if (message !== ""){
			newHistory.push({owner: true, message: message}, {owner: false, message: "Im going to kill u!"})
			setHistory(newHistory)
			setMessage("")
		}
	}

	return (
		<main className="chat">
			<ul>
				{renderChat()}
			</ul>
			<div className="input">
				<input 
					type="text"
					value={message}
					className="input__text"
					onChange={handleMessageChange}
					onKeyUp={handleEnterPressed}
					placeholder="Mensagem..."
				/>
				<button className="input__button" onClick={addMessage}>→</button>
			</div>
		</main>
	);
}

export default Chat;
