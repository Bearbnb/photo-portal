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
		const {card, cards} = this.state;
	    return (
	      <div className="App">
	        <button 
	          onClick={() => this.nextCard()} 
	          disabled={card.id === data.properties.length-1}
	        >Next</button>


	        <button 
	          onClick={() => this.prevCard()} 
	          disabled={card.id === 0}
	        >Prev</button>

	        <div className="page">
	                <h1>michaelchi</h1>
	        	<div className='cards-slider'>
	        		<div className='cards-slider-wrapper'>
	            		{cards.map(card => <Card key={card.id} card={card} />)}
	            	</div>
	            </div>

	        </div>
	      </div>
	    );
	}
}

export default App;