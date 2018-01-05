import React from 'react';
let BugItem = ({bug, toggle}) => {
	let bugStyle = bug.isClosed ? 'bugname closed' : 'bugname';
	return (
		<li>
			<span className={bugStyle} onClick={() => toggle(bug)}>
				{bug.name}
			</span>
			<div><i>{bug.isClosed.toString()}</i></div>
		</li>
	);
}
export default BugItem;