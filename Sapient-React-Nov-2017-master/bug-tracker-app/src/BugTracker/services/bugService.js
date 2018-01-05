function load(){
	return fetch('http://localhost:3001/bugs')
		.then(response => response.json())
		
}
function createNew(bugName){
	let newBug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		}
	return fetch('http://localhost:3001/bugs', {
			method : 'POST',
			headers : {
				'content-type' : 'application/json'
			},
			body : JSON.stringify(newBug)
		})
		.then(response => response.json());
}

function toggle(bug){
	let toggledBug = {...bug, isClosed : !bug.isClosed};
	return fetch('http://localhost:3001/bugs/' + bug.id, {
		method : 'PUT',
		headers : {
			'content-type' : 'application/json'
		},
		body : JSON.stringify(toggledBug)
	})
	.then(response => response.json());
}

let bugService = {
	load, createNew, toggle
};

export default bugService;