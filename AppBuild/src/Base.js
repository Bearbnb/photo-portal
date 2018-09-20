import { Component } from 'react';

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import App from './App.js';
import './App.css';
import $ from 'jquery';
import request from 'request';
import data from './data/data';


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

  componentDidMount() {
    const idPath = window.location.pathname;
    const id = idPath.substring(1, idPath.length - 1);
    this.setState({data: data})
    var settings = {
      "async": true,
      "crossDomain": true,
      //'url': 'http://localhouse:3007/house'
      "url": `/photos/${id}`,
      "method": "GET",
      "headers": {
        "Cache-Control": "no-cache",
        "Postman-Token": "21422b57-759d-4710-83dc-565d97eae64f"
      }
    }

    $.ajax(settings).done(function (response) {
      console.log('***', response);
      var new_data = {properties: response};
      this.setState({data: new_data})
    });


  }

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