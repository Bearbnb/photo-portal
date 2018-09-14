import React, {Component} from 'react';
import './App.css';

import data from '.data/data';


class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			properties:data.properties,
			property:data.properties[0]
		}
	}

	nextProperty = () => {
		//const newIndex = this.state.property.index + 1;
	}

	render() {
		return (
			<div> Ello m8 </div>
		)
	}
}