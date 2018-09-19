import { Component } from 'react';

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import App from './App.jsx';
import styles from'./App.css';
import $ from 'jquery';
import data from './data/data';

//var data = {properties: []}
class Base extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      show: false,
      data: data
    };
  }

  showModal(){
    this.setState({ show: true });
  };

  hideModal(){
    this.setState({ show: false });
  };


  componentDidMount() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3007/house",
      "method": "GET",
      "headers": {
        "Cache-Control": "no-cache",
        "Postman-Token": "0324b704-8632-4f94-a2a0-735c681cf804"
      }
    }
    var that = this;
    $.ajax(settings).done(function (response) {
      console.log(response);
      that.setState({data: response})
    });

  }

  render() {
    console.log("*****",this.state);

    return (
      <main className={styles.mainDiv}>
        <h1>BareBnB</h1>

        <App show={this.state.show} data={this.state.data} handleClose={this.hideModal.bind(this)}/>


          <div className={styles.heroSection} onClick={this.showModal.bind(this)}>
            <button className={styles.heroViewphotosButton}> <i class="far fa-images"></i> View Photos </button>
            <button className={styles.heroShareButton}> <i class="far fa-share-square"></i> Share </button>
            <button className={styles.heroSaveButton}> <i class="far fa-heart"></i> Save </button>
          </div>



          <p>Page Content..</p>


      </main>
    );
  }
}

export default Base