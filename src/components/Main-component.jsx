import React from 'react';
import HeaderComponent from './Header';
import FooterComponent from './Footer';
import '../styles/index.scss';
export default class mainComponent extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		
		
		return( 
			<div className="main-component">
				<HeaderComponent />
				<FooterComponent />
			</div>
		);
	}
}