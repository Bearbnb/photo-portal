import { Component } from 'react';

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import App from './App.js';
import './App.css';
import $ from 'jquery';
import request from 'request';
import data from './data/data';

//var data = {properties: []}
class Base extends Component {
  constructor(props){
    super(props);
    this.state = { 
      show: false,
      data: data
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  // componentDidMount() {
  //   var new_data = {properties: []};
  //   var options = { method: 'GET',
  //     url: 'http://localhost:3007/house',
  //     headers: 
  //      { 'Postman-Token': '74b159aa-6450-4cae-896c-a10335065000',
  //        'Cache-Control': 'no-cache' } };

  //   request(options, function (error, response, body) {
  //     if (error) throw new Error(error);

  //     data.properties = JSON.parse(body);
  //     //this.setState({data: new_data})
  //     console.log(data.properties[0].photo_url);
  //   });

  // }

  render() {
    return (
      <main class='main-div'>
        


        <App show={this.state.show} data={this.state.data} handleClose={this.hideModal}/>


          <div class="hero-section" onClick={this.showModal}>
            <button class="hero-viewphotos-button"> <i class="far fa-images"></i> View Photos </button>
            <button class="hero-share-button"> <i class="far fa-share-square"></i> Share </button>
            <button class="hero-save-button"> <i class="far fa-heart"></i> Save </button>
          </div>



          


      </main>
    );
  }
}

export default Base