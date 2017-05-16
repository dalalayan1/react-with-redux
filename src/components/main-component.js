import React from 'react';
import Child1 from './child1.js';
import Child2 from './child2.js';
import Child3 from './child3.js';

export default class mainComponent extends React.Component{

	constructor(props){
		super(props);
		this.fetchData = this.fetchData.bind(this);
		this.state = {
			name : '',
			company: ''
		}
	}

	fetchData(e){
		e.preventDefault();
		this.props.getData('https://api.myjson.com/bins/mwnu9');
	}

	componentWillMount(){
		console.log("COMPONENT WILL MOUNT!");
	}

	componentDidMount(){
		console.log("COMPONENT DID MOUNT!");
		if(this.props.data){
			debugger;
			this.setState({
			name : this.props.data.name,
			company: this.props.data.company
		})
		}
		
	}

	shouldComponentUpdate(){
		console.log("SHOULD COMPONENT UPDATE!");
		if(!this.props.data){
			return true;
		}
		return false;
	}

	componentDidUpdate(){
		console.log("COMPONENT DID UPDATE!");
		
	}

	render(){
		console.log("COMPONENT RENDERS!",this.state);
		return( 
			<div className="main-component">
				<h2>This is the main component which will take other child components</h2>
				<Child1 />
				<Child2 />
				<Child3 />
                <button onClick={this.fetchData}>FETCH DATA</button>
				<h3>DETAILS : </h3>
				<p>NAME : {this.props.data && this.state.name}</p>
				<p>COMPANY : {this.props.data && this.state.company}</p>
			</div>
		);
	}
}