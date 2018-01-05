import React from 'react';
import BugItem from './BugItem';

let BugList = ({bugs, toggle, removeClosed}) => {
	let	bugItems = bugs.map((bug,index) => (
			<BugItem  key={index} {...{bug, toggle}}></BugItem>
	));
	return (
		<section className="list">
			<ol id="olBugList">
				{bugItems}
			</ol>
			<input type="button" value="Remove Closed" onClick={() => removeClosed()}/>
		</section>
	);
}
export default BugList;