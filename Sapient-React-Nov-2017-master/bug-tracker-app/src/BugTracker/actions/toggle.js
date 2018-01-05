/*function toggle(bug){
	return { type : 'TOGGLE', payload : bug}
}*/
import bugService from '../services/bugService';
function toggle(bug){
	return function(dispatch){
		dispatch({
			type : 'LOADING'
		});
		bugService
			.toggle(bug)
			.then(bug => dispatch({
				type : 'TOGGLED',
				payload : bug
			}))
			.then(() => dispatch({ 
				type : 'DONE'
			}));
	}
}
export default toggle;