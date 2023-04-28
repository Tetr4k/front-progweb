import classNames from "classnames";

import { useState } from "react";

import { BsFillSendFill } from 'react-icons/bs'

function Chat(props) {
	const [history, setHistory] = useState([{owner: false, message: "Hello!"}]);
	const [message, setMessage] = useState("");

	const handleMessageChange = (event) =>
		setMessage(event.target.value)

	const handleEnterPressed = (event) => {
		if (event.key === 'Enter')
			addMessage()
	}

	const renderChat = () =>
	history.map((elem, index) => {
		const itemClasses = classNames(
			'chat__message',
			{'chat__message--user': elem.owner},
			{'chat__message--bot': !elem.owner},
			{dark: props.theme}
		) 
		return <li className={itemClasses} key={index}>{elem.message}</li>
	})

	const addMessage = () => {
		const newHistory = history
		if (message !== ""){
			newHistory.push({owner: true, message: message}, {owner: false, message: "Hello!"})
			setHistory(newHistory)
			setMessage("")
		}
	}

	const textInputClass = classNames("input__text", {dark: props.theme})
	const buttonClass = classNames("send__button", {dark: props.theme})
	const inputClass = classNames("input", {dark: props.theme})
	
	return (
		<main className="chat">
			<ul className="messages">
				{renderChat()}
			</ul>
			<div className={inputClass}>
				<input 
					type="text"
					value={message}
					className={textInputClass}
					onChange={handleMessageChange}
					onKeyUp={handleEnterPressed}
					placeholder="Mensagem..."
				/>
				<button
					className={buttonClass} 
					onClick={addMessage}
				>
					<BsFillSendFill/>
				</button>
			</div>
		</main>
	);
}

export default Chat;
