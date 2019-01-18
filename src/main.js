import { Map } from './map';
import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
const loadGoogleMapsApi = require('load-google-maps-api');
import 'load-google-maps-api';

let googleMapsClient = require('@google/maps').createClient({
  key: process.env.API_KEY,
  Promise: Promise
});
let GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.KEY = process.env.API_KEY;

$(document).ready(function() {
  let mapElement = document.getElementById('map');
  let loadPromise = Map.loadMap();
  loadPromise.then(function(googleMaps) {
    return Map.createMap(googleMaps, mapElement);
  });

  //   let promise = new Promise(function(resolve, reject) {
  //     let xhr = new XMLHttpRequest();
  //     // console.log(xhr.getResponseHeader());
  //     let url = `https://maps.googleapis.com/maps/api/json?&key=${process.env.API_KEY}&callback=initMap`;
  //     xhr.onload = function () {
  //       if (this.status === 200) {
  //         resolve(xhr.response);
  //       } else {
  //         reject(Error(xhr.statusText));
  //       }
  //     };
  //     xhr.open("GET", url, true);
  //     xhr.send();
  //   });
  //
  //   promise.then(function(response){
  //     console.log(response);
  //     let body = JSON.parse(response);
  //     console.log(body);
  //     // const map = new google.maps.Map($('#map'), {
  //     //   center: {lat: -34.397, lng: 150.644},
  //     //   zoom: 1
  //     // });
  //     console.log("heyo");
  //   });

  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/js?',
    type: 'GET',
    data: {
      key: process.env.API_KEY,
      callback: 'initMap'
    },
    success: function(response) {
      console.log(response);
      let body = JSON.parse(response);
      console.log(body);
      // const map = new google.maps.Map($('#map'), {
      //   center: {lat: -34.397, lng: 150.644},
      //   zoom: 1
      // });
      console.log('almost');
    },
    error: function() {
      $("#error-message").text('There was a problem proccessing your API.');
      console.log('not quite');
    }
  });


});
