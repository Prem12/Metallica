/*function createNew(newBugName){
	return { type : 'ADD_NEW', payload : newBugName};
}*/
import bugService from '../services/bugService';

function createNew(newBugName){
	return function(dispatch){
		dispatch({
			type : 'LOADING'
		});
		bugService
			.createNew(newBugName)
			.then(bug => dispatch({
				type : 'ADDED',
				payload : bug
			}))
			.then(() => dispatch({ 
				type : 'DONE'
			}))
	}
}
export default createNew;
			
			