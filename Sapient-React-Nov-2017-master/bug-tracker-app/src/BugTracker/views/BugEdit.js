import React, { Component } from 'react';

class BugEdit extends Component{
	onCreateClick(){
		let newBugName = this.refs.txtBugName.value;
		this.props.createNew(newBugName);
	}
	render(){
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" ref="txtBugName"/>
				<input type="button" value="Create New" onClick={this.onCreateClick.bind(this)}/>
			</section>
		)
	}
}
export default BugEdit;
