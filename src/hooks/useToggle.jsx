import { useState } from "react"

function useToggle(initialState){
	const [state, setState] = useState(initialState);
	const toggle = (newState) => newState === undefined ? setState(!state) : setState(newState);
	
	return [state, toggle];
}

export default useToggle;