import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import * as bugActions from './actions';

import { BugList, BugEdit, BugStats, BugSort } from './views';

class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let {model : bugs, createNew, toggle, removeClosed } = this.props;
		return(
			<div>
				<BugStats bugs={bugs}></BugStats>
				<BugSort></BugSort>
				<BugEdit createNew={createNew}></BugEdit>
				<BugList {...{bugs, toggle, removeClosed}}></BugList>
			</div>
		)
	}
}
export default connect(
	function mapStateToProps(state){
		return {
			model : state.bugs
		}
	},
	function mapDispatchToProps(dispatch){
		return bindActionCreators(bugActions, dispatch);
	}
)(BugTracker);

