function bugsReducer(currentState = [], action){
	if (action.type === 'LOAD'){
		return [...action.payload];
	}
	if (action.type === 'ADDED'){
		let newBug = action.payload
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'TOGGLED'){
		let toggledBug = action.payload;
		let newState = currentState.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE_CLOSED'){
		return currentState.filter(bug => !bug.isClosed);
	}
	return currentState;
}
export default bugsReducer;