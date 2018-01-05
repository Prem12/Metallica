import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import appStore from './store';
import BugTracker from './BugTracker/BugTracker';
import StatusIndicator from './StatusIndicator/StatusIndicator';


ReactDOM.render(
	<Provider store={appStore}>
		<div>
			<StatusIndicator />
			<BugTracker />
		</div>
	</Provider>, document.getElementById('root'));

