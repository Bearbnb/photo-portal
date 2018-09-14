import React, {Component} from 'react';
import './App.css';

import data from './data/data';


class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			cards: data.properties,
			card: data.properties[0]
		}
	}

	nextCard() {
		const nextIndex = this.state.card.id + 1;
		this.setState({
			card: data.properties[nextIndex]
		});
	}

	prevCard() {
		const prevIndex = this.state.card.id + 1;
		this.setState({
			card: data.properties[prevIndex]
		})
	}

	render() {
		const {card} = this.state;
	    return (
	      <div className="App">
	        <button 
	          onClick={() => this.nextCard()} 
	          disabled={property.id === data.properties.length-1}
	        >Next</button>

	        
	        <button 
	          onClick={() => this.prevCard()} 
	          disabled={property.id === 0}
	        >Prev</button>

	        <div className="page">
	                <h1>michaelchi</h1>

	            <Card card={card} />

	        </div>
	      </div>
	    );
	}
}

export default App;