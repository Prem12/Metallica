import bugService from '../services/bugService';
function load(){
	return function(dispatch){
		dispatch({
			type : 'LOADING'
		});
		bugService
			.load()
			.then(bugs => dispatch({
				type : 'LOAD',
				payload : bugs
			}))
			.then(() => dispatch({ 
				type : 'DONE'
			}));
	}
}
export default load;