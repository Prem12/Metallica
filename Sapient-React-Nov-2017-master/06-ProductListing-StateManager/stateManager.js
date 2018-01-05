var SM = (function(){

	function createStore(reducer){
		let _reducer = reducer;

		let _init_action = '@@INIT_ACTION';
		let _state = reducer(undefined, _init_action);

		function getState(){
			return _state;
		}

		function dispatch(action){
			let newState = _reducer(_state, action);
			if (newState !== _state){
				_state = newState;
				trigger();
			}
		}

		let _subscriptions = [];
		function subscribe(fn){
			_subscriptions.push(fn);
		}
		function trigger(){
			_subscriptions.forEach(fn => fn());
		}

		return {
			getState : getState,
			dispatch : dispatch,
			subscribe : subscribe
		}

	}
	return {
		createStore : createStore
	};
})();